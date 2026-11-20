import {b,type Project,type Text} from './site';
import assets from './screenshot-assets.json';
export type ProjectScreenshot={id:string;project:Project['id'];application:Text;title:Text;description:Text;alt:Text;language:Text;width:number;height:number;previewOffset?:number;provenance?:Text};
export const screenshots:ProjectScreenshot[]=[{
 id:'desktop-agent-manager',project:'robrix2',application:b('Hagency Desktop','Hagency Desktop'),
 title:b('Manage your Agents beside the conversation.','在对话旁管理 Agent。'),
 description:b('The Agent workspace brings your Agents, resource pools and task activity together. Keep team conversations open while you manage the work.','Agent 工作台集中呈现 Agent、资源池和任务动态，让团队对话与工作管理同时进行。'),
 alt:b('Hagency Desktop with conversations on the left and the Agent manager workspace on the right.','Hagency Desktop 左侧为对话区，右侧为 Agent 管理工作台。'),
 language:b('English interface','英文界面'),width:assets[0].width,height:assets[0].height
}];
export const projectScreenshots=(project:Project['id'])=>screenshots.filter(shot=>shot.project===project);
export const screenshotUI={
 label:b('HAGENCY DESKTOP','HAGENCY DESKTOP'),title:b('Your workspace, connected.','协作界面，集中连接。'),intro:b('Conversations, Agents and resource management in one native workspace.','在一个原生工作空间中使用对话、Agent 与资源管理。'),
 preview:b('Desktop workspace','桌面工作台'),open:b('View full screenshot','查看完整截图'),original:b('Open original image','打开原图'),actual:b('Actual size','实际大小'),fit:b('Fit to width','适应宽度'),loading:b('Loading image…','正在加载图片…'),error:b('The image could not load. Open the original image to continue.','图片加载失败，请打开原图查看。')
};
