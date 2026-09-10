import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ReactFlow, Background, MiniMap, BaseEdge, Handle, Position, MarkerType, applyNodeChanges, type Node, type NodeProps, type Edge, type NodeChange, type EdgeChange, type EdgeProps, type ReactFlowInstance } from '@xyflow/react';
import { architectureViews, architectureUI as copy, components, connections, type ComponentId, type ViewId } from '@/data/architecture';
import { b, t, type Locale } from '@/data/site';

type MapNode = Node<{componentId: ComponentId; lang: Locale}, 'architecture'>;
type Selection = {kind:'component';id:ComponentId}|{kind:'connection';id:string};
const sides = {top:Position.Top,right:Position.Right,bottom:Position.Bottom,left:Position.Left};

function ArchitectureNode({data,selected}: NodeProps<MapNode>) {
  const item=components[data.componentId];
  return <div className={`flow-component flow-${item.color}${selected?' is-selected':''}`}>
    {Object.entries(sides).flatMap(([side,position])=>[
      <Handle key={`in-${side}`} id={`in-${side}`} type="target" position={position} isConnectable={false}/>,
      <Handle key={`out-${side}`} id={`out-${side}`} type="source" position={position} isConnectable={false}/>,
    ])}
    <Handle id="out-top-right" type="source" position={Position.Top} style={{left:'75%'}} isConnectable={false}/>
    <Handle id="out-left-lower" type="source" position={Position.Left} style={{top:'75%'}} isConnectable={false}/>
    <Handle id="out-right-lower" type="source" position={Position.Right} style={{top:'75%'}} isConnectable={false}/>
    <Handle id="in-left-lower" type="target" position={Position.Left} style={{top:'75%'}} isConnectable={false}/>
    <Handle id="in-top-left" type="target" position={Position.Top} style={{left:'25%'}} isConnectable={false}/>
    <Handle id="in-top-right" type="target" position={Position.Top} style={{left:'75%'}} isConnectable={false}/>
    <span className="flow-component-layer"><i/>{t(item.layer,data.lang)}</span>
    <strong>{t(item.title,data.lang)}</strong>
    <span className="flow-component-interface">{item.interfaces[0]}</span>
  </div>;
}
const nodeTypes = {architecture:ArchitectureNode};
// The retained terminal path runs around the runner group, so it cannot look
// like a connection from Codex to ACP when the diagram is fitted to the page.
function OuterEdge({id,sourceX,sourceY,targetX,targetY,markerEnd,markerStart,style,label,labelStyle,labelBgStyle,labelBgPadding,labelBgBorderRadius,data}: EdgeProps) {
  const route=data as {right:number;top:number};
  return <BaseEdge id={id} path={`M ${sourceX} ${sourceY} V ${route.top} H ${route.right} V ${targetY} H ${targetX}`} markerEnd={markerEnd} markerStart={markerStart} style={style} label={label} labelX={route.right} labelY={(route.top+targetY)/2} labelStyle={labelStyle} labelBgStyle={labelBgStyle} labelBgPadding={labelBgPadding} labelBgBorderRadius={labelBgBorderRadius}/>;
}
const edgeTypes={outer:OuterEdge};
const initialNodes = (view: ViewId,lang: Locale): MapNode[] => architectureViews.find(item=>item.id===view)!.nodes.map(({id,x,y})=>({id,type:'architecture',position:{x,y},data:{componentId:id,lang},width:240,ariaLabel:t(components[id].title,lang),deletable:false}));

export default function ArchitectureFlow({lang}: {lang:Locale}) {
  const [viewId,setViewId]=useState<ViewId>('overview');
  const [nodes,setNodes]=useState<MapNode[]>(()=>initialNodes('overview',lang));
  const [selection,setSelection]=useState<Selection>({kind:'component',id:'bridge'});
  const [theme,setTheme]=useState<'dark'|'light'>('dark');
  const instance=useRef<ReactFlowInstance<MapNode,Edge>|null>(null);
  const view=architectureViews.find(item=>item.id===viewId)!;
  const selectedConnection=selection.kind==='connection'?connections.find(item=>item.id===selection.id):undefined;
  const selectedComponent=selection.kind==='component'?components[selection.id]:undefined;

  useEffect(()=>{
    const update=()=>setTheme(document.documentElement.dataset.theme==='light'?'light':'dark');
    update();const observer=new MutationObserver(update);
    observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
    return ()=>observer.disconnect();
  },[]);
  const changeView=(id: ViewId)=>{
    const target=architectureViews.find(item=>item.id===id)!;
    setViewId(id);setNodes(initialNodes(id,lang));setSelection({kind:'component',id:target.initial});
  };
  const onNodesChange=useCallback((changes: NodeChange<MapNode>[])=>{
    setNodes(previous=>applyNodeChanges(changes,previous));
    const selected=changes.find(change=>change.type==='select'&&change.selected);
    if(selected&&'id' in selected)setSelection({kind:'component',id:selected.id as ComponentId});
  },[]);
  const onEdgesChange=useCallback((changes: EdgeChange[])=>{
    const selected=changes.find(change=>change.type==='select'&&change.selected);
    if(selected&&'id' in selected)setSelection({kind:'connection',id:selected.id});
  },[]);
  const edges=useMemo<Edge[]>(()=>view.edges.map((id,index)=>{
    const item=connections.find(edge=>edge.id===id)!;
    const from=nodes.find(node=>node.id===item.from)!,to=nodes.find(node=>node.id===item.to)!;
    // Route diagonals through the column aisles. Long aligned links use an
    // outer handle so they cannot appear to connect through an unrelated node.
    const horizontal=to.position.x!==from.position.x;
    let side=horizontal?(to.position.x>from.position.x?'right':'left'):(to.position.y>from.position.y?'bottom':'top');
    let opposite={right:'left',left:'right',top:'bottom',bottom:'top'}[side]!;
    const between=(value:number,a:number,b:number)=>value>Math.min(a,b)&&value<Math.max(a,b);
    if(!horizontal&&nodes.some(node=>node.position.x===from.position.x&&between(node.position.y,from.position.y,to.position.y))){side=from.position.x<=410?'left':'right';opposite=side;}
    if(horizontal&&from.position.y===to.position.y&&nodes.some(node=>node.position.y===from.position.y&&between(node.position.x,from.position.x,to.position.x))){side=from.position.y>=600?'bottom':'top';opposite=side;}
    let sourceHandle=`out-${side}`,targetHandle=item.id==='reply'?'in-top-right':`in-${opposite}`;
    let stepPosition=.22+(index%7)*.09;
    if(viewId==='runtimes') {
      if(['claude','acp','claude-mcp','acp-mcp'].includes(id)){sourceHandle='out-bottom';targetHandle='in-top';stepPosition=id==='acp'?.2:.55;}
      if(id==='acp')targetHandle='in-top-left';
      if(id==='mcp-backend'){sourceHandle='out-left';targetHandle='in-left-lower';}
      if(id==='codex-approval'){sourceHandle='out-top-right';targetHandle='in-bottom';stepPosition=.25;}
      if(id==='terminal'){sourceHandle='out-top';targetHandle='in-right';}
    }
    if(viewId==='overview'&&id==='poll')sourceHandle='out-left-lower';
    if((viewId==='overview'&&id==='transactions')||(viewId==='registration'&&id==='device-owner'))sourceHandle='out-right-lower';
    const outer=viewId==='runtimes'&&id==='terminal';
    const active=selection.kind==='connection'?selection.id===id:selection.id===item.from||selection.id===item.to;
    const color=active?'var(--teal)':'var(--flow-edge)';
    return {id,source:item.from,target:item.to,type:outer?'outer':'smoothstep',...(outer?{data:{right:Math.max(...nodes.map(node=>node.position.x+240))+90,top:Math.min(...nodes.map(node=>node.position.y))-70}}:{}),pathOptions:{offset:side===opposite?90:20,stepPosition},sourceHandle,targetHandle,label:t(item.label,lang),ariaLabel:`${t(components[item.from].title,lang)} → ${t(components[item.to].title,lang)}: ${t(item.label,lang)}`,deletable:false,
      markerEnd:{type:MarkerType.ArrowClosed,color,width:18,height:18},...(item.reverse?{markerStart:{type:MarkerType.ArrowClosed,color,width:18,height:18}}:{}),
      selected:selection.kind==='connection'&&selection.id===id,
      style:{stroke:color,strokeWidth:active?2:1.2},labelStyle:{fill:active?'var(--teal)':'var(--muted)',fontSize:11,fontWeight:500},labelBgStyle:{fill:'var(--bg-2)',fillOpacity:.97},labelBgPadding:[7,5],labelBgBorderRadius:4,
    };
  }),[view,nodes,lang,selection]);

  return <div className="flow-explorer" data-architecture-flow data-view={viewId} data-color-mode={theme}>
    <div className="flow-view-switch" role="group" aria-label={t(b('Architecture views','架构视图'),lang)}>{architectureViews.map(item=><button key={item.id} type="button" data-architecture-view={item.id} aria-pressed={viewId===item.id} onClick={()=>changeView(item.id)}>{t(item.title,lang)}</button>)}</div>
    <div className="flow-view-intro"><p>{t(view.description,lang)}</p><a href="#connections">{t(copy.textView,lang)} ↗</a></div>
    <div className="flow-toolbar"><label htmlFor="architecture-component">{t(copy.inspect,lang)}</label><select id="architecture-component" data-component-select value={selection.kind==='component'?selection.id:''} onChange={event=>setSelection({kind:'component',id:event.target.value as ComponentId})}>
      <option value="" disabled>{t(copy.selected,lang)}</option>{view.nodes.map(node=><option key={node.id} value={node.id}>{t(components[node.id].title,lang)}</option>)}
    </select><div className="flow-map-controls">
      <button type="button" data-flow-zoom="in" aria-label={t(copy.zoomIn,lang)} onClick={()=>instance.current?.zoomIn({duration:0})}>+</button>
      <button type="button" data-flow-zoom="out" aria-label={t(copy.zoomOut,lang)} onClick={()=>instance.current?.zoomOut({duration:0})}>−</button>
      <button type="button" data-flow-fit onClick={()=>instance.current?.fitView({padding:.25,duration:0})}>{t(copy.fit,lang)}</button>
      <button type="button" data-flow-reset onClick={()=>{setNodes(initialNodes(viewId,lang));setSelection({kind:'component',id:view.initial});requestAnimationFrame(()=>instance.current?.fitView({padding:.25,duration:0}));}}>{t(copy.reset,lang)}</button>
    </div></div>
    <div className="architecture-canvas" role="region" aria-label={t(b('Interactive architecture diagram','交互式架构图'),lang)}>
      <ReactFlow<MapNode,Edge> key={viewId} nodes={nodes.map(node=>({...node,selected:selection.kind==='component'&&selection.id===node.id}))} edges={edges} nodeTypes={nodeTypes} edgeTypes={edgeTypes} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onInit={value=>{instance.current=value;}} onNodeClick={(_,node)=>setSelection({kind:'component',id:node.id as ComponentId})} onEdgeClick={(_,edge)=>setSelection({kind:'connection',id:edge.id})} nodesConnectable={false} edgesReconnectable={false} deleteKeyCode={null} multiSelectionKeyCode={null} selectionKeyCode={null} fitView fitViewOptions={{padding:.25}} minZoom={.15} maxZoom={2.5} zoomOnScroll={false} preventScrolling={false} colorMode={theme}
        ariaLabelConfig={{'node.a11yDescription.default':t(b('Press Enter or Space to inspect a component. Use arrow keys to move a selected node.','按 Enter 或空格查看组件，使用方向键移动所选节点。'),lang),'node.a11yDescription.keyboardDisabled':t(b('Press Enter or Space to inspect a component.','按 Enter 或空格查看组件。'),lang),'edge.a11yDescription.default':t(b('Press Enter or Space to inspect a connection.','按 Enter 或空格查看连接。'),lang),'node.a11yDescription.ariaLiveMessage':({x,y})=>t(b(`Node moved to ${x}, ${y}.`,`节点已移动到 ${x}，${y}。`),lang)}}>
        <Background color="var(--line)" gap={24} size={1}/>
        <MiniMap position="bottom-left" style={{width:112,height:76}} pannable zoomable ariaLabel={t(b('Architecture overview map','架构缩略图'),lang)} nodeColor="var(--flow-edge)" maskColor="var(--flow-minimap-mask)"/>
      </ReactFlow>
    </div>
    <p className="flow-help">{t(copy.help,lang)}</p>
    <div className="flow-inspector" data-flow-inspector aria-live="polite" aria-atomic="true">
      <div><span className="eyebrow">{t(selectedComponent?copy.component:copy.connection,lang)}</span><h3>{selectedComponent?t(selectedComponent.title,lang):selectedConnection?`${t(components[selectedConnection.from].title,lang)} → ${t(components[selectedConnection.to].title,lang)}`:''}</h3><p>{selectedComponent?t(selectedComponent.body,lang):selectedConnection?t(selectedConnection.detail,lang):''}</p></div>
      <div><h4>{t(copy.interfaces,lang)}</h4><ul>{(selectedComponent?.interfaces??[selectedConnection?.protocol??'']).map(item=><li key={item}><code>{item}</code></li>)}</ul>{selectedComponent&&<><h4>{t(copy.boundary,lang)}</h4><p>{t(selectedComponent.boundary,lang)}</p></>}</div>
    </div>
  </div>;
}
