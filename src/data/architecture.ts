import {type Text} from './site';
export type ComponentInfo={title:Text;layer:Text;body:Text;interfaces:string[];boundary:Text;color:'blue'|'amber'|'teal'|'muted'};
export const components={
  "robrix": {
    "title": {
      "en": "Hagency Desktop",
      "zh-cn": "Hagency Desktop"
    },
    "layer": {
      "en": "CLIENT",
      "zh-cn": "客户端"
    },
    "body": {
      "en": "Native Makepad UI and Matrix SDK: personal Agents, chat, local profiles and supported owner decisions.",
      "zh-cn": "原生 Makepad UI 与 Matrix SDK：个人 Agent、聊天、本地配置与支持的所有者决策。"
    },
    "interfaces": [
      "Matrix Client–Server API",
      "Pasion OAuth / PKCE"
    ],
    "boundary": {
      "en": "Presentation does not grant tool authority. The release snapshot is rc.13; main is newer.",
      "zh-cn": "界面展示不会授予工具权限；发布快照为 rc.13，main 更新。"
    },
    "color": "blue"
  },
  "palpo": {
    "title": {
      "en": "Embedded Palpo",
      "zh-cn": "内嵌 Palpo"
    },
    "layer": {
      "en": "SERVER PROCESS",
      "zh-cn": "服务器进程"
    },
    "body": {
      "en": "Carries Matrix rooms, membership, events, media, application-service transactions and federation inside Hagency Server.",
      "zh-cn": "在 Hagency Server 内承载 Matrix 房间、成员、事件、媒体、应用服务事务和联邦。"
    },
    "interfaces": [
      "/_matrix/client/*",
      "/_matrix/federation/*"
    ],
    "boundary": {
      "en": "No separate Node companion is required. Matrix transport is not model inference.",
      "zh-cn": "无需独立 Node 配套应用；Matrix 传输不是模型推理。"
    },
    "color": "amber"
  },
  "pasion": {
    "title": {
      "en": "Embedded Pasion",
      "zh-cn": "内嵌 Pasion"
    },
    "layer": {
      "en": "SERVER PROCESS",
      "zh-cn": "服务器进程"
    },
    "body": {
      "en": "Personal account registration, login, OAuth scopes, session and token lifecycle.",
      "zh-cn": "个人账户注册、登录、OAuth scope、会话与令牌生命周期。"
    },
    "interfaces": [
      "OAuth / OIDC",
      "Native DCR / PKCE"
    ],
    "boundary": {
      "en": "A browser session, Matrix device and executor grant have different authority.",
      "zh-cn": "浏览器会话、Matrix 设备与执行器授权的权限不同。"
    },
    "color": "amber"
  },
  "backend": {
    "title": {
      "en": "Server control plane",
      "zh-cn": "Server 控制平面"
    },
    "layer": {
      "en": "SERVER PROCESS",
      "zh-cn": "服务器进程"
    },
    "body": {
      "en": "Owns permanent Agent identity, management policy, context, execution leases and durable command / reply receipts.",
      "zh-cn": "负责永久 Agent 身份、管理策略、上下文、执行租约及持久命令和回复凭据。"
    },
    "interfaces": [
      "/hagency/api/*",
      "PostgreSQL: hagency database"
    ],
    "boundary": {
      "en": "A lease admits work; it does not prove model completion or a hard spending cap.",
      "zh-cn": "租约接纳任务，不证明模型完成，也不构成硬消费上限。"
    },
    "color": "teal"
  },
  "bridge": {
    "title": {
      "en": "Local owner daemon",
      "zh-cn": "本地所有者守护进程"
    },
    "layer": {
      "en": "EXECUTOR DEVICE",
      "zh-cn": "执行器设备"
    },
    "body": {
      "en": "The Desktop owner engine qualifies its local runtime and handles eligible work using bound owner, device and generation.",
      "zh-cn": "Desktop 所有者引擎确认本地运行时资格，依据绑定所有者、设备与 generation 处理工作。"
    },
    "interfaces": [
      "Owner-device protocol",
      "Persistent local ledger"
    ],
    "boundary": {
      "en": "Local runtime credentials remain local. New account-aware hosting is later than rc.13.",
      "zh-cn": "本地运行时凭据留在本地；新的按账户托管晚于 rc.13。"
    },
    "color": "teal"
  },
  "devices": {
    "title": {
      "en": "Agent crypto device",
      "zh-cn": "Agent 加密设备"
    },
    "layer": {
      "en": "EXECUTOR DEVICE",
      "zh-cn": "执行器设备"
    },
    "body": {
      "en": "A real Matrix SDK device owns its crypto store, receives room keys and sends encrypted Agent messages.",
      "zh-cn": "真实 Matrix SDK 设备持有加密存储，接收房间密钥并发送 Agent 加密消息。"
    },
    "interfaces": [
      "Matrix SDK crypto store",
      "Encrypted sync / send"
    ],
    "boundary": {
      "en": "Server key presence alone is not sender SDK readiness. Provider-bound task plaintext leaves the encryption boundary.",
      "zh-cn": "服务器存在密钥不等于发送方 SDK 就绪；提供方任务明文会离开端到端加密边界。"
    },
    "color": "blue"
  },
  "codex": {
    "title": {
      "en": "Codex",
      "zh-cn": "Codex"
    },
    "layer": {
      "en": "LOCAL RUNTIME",
      "zh-cn": "本地运行时"
    },
    "body": {
      "en": "Native App Server protocol correlates turns, progress, supported questions, permissions and usage.",
      "zh-cn": "原生 App Server 协议关联 turn、进度、支持的问题、权限和用量。"
    },
    "interfaces": [
      "App Server JSON-RPC / stdio"
    ],
    "boundary": {
      "en": "Supported protocol operations do not establish complete CLI equivalence.",
      "zh-cn": "支持的协议操作不代表完整 CLI 对等。"
    },
    "color": "teal"
  },
  "claude": {
    "title": {
      "en": "Claude",
      "zh-cn": "Claude"
    },
    "layer": {
      "en": "LOCAL RUNTIME",
      "zh-cn": "本地运行时"
    },
    "body": {
      "en": "Managed local CLI with supported structured permission and execution controls.",
      "zh-cn": "托管本地 CLI，支持结构化权限与执行控制。"
    },
    "interfaces": [
      "Native Claude CLI"
    ],
    "boundary": {
      "en": "Isolation and supported interactions depend on runtime and platform policy.",
      "zh-cn": "隔离与交互支持取决于运行时及平台策略。"
    },
    "color": "teal"
  },
  "octos": {
    "title": {
      "en": "Octos",
      "zh-cn": "Octos"
    },
    "layer": {
      "en": "LOCAL RUNTIME",
      "zh-cn": "本地运行时"
    },
    "body": {
      "en": "OUP discovery reads actual installed profiles and model choices, including supported local or custom endpoints.",
      "zh-cn": "OUP 发现读取实际安装配置与模型选项，包括支持的本地模型或自定义端点。"
    },
    "interfaces": [
      "Octos Unified Protocol / stdio"
    ],
    "boundary": {
      "en": "Distinct profiles remain distinct. Full autonomous post-run reports are not established.",
      "zh-cn": "不同配置保持独立；尚未证明完整的运行结束后自主报告。"
    },
    "color": "teal"
  },
  "provider": {
    "title": {
      "en": "Selected model provider",
      "zh-cn": "选用的模型提供方"
    },
    "layer": {
      "en": "INFERENCE",
      "zh-cn": "推理"
    },
    "body": {
      "en": "The coding runtime contacts its selected hosted, local or custom model endpoint.",
      "zh-cn": "编程运行时连接所选云端、本地或自定义模型入口。"
    },
    "interfaces": [
      "Provider-specific model API"
    ],
    "boundary": {
      "en": "Receives the submitted task plaintext; provider policy is separate from Matrix encryption.",
      "zh-cn": "接收提交的任务明文；提供方策略独立于 Matrix 加密。"
    },
    "color": "muted"
  },
  "approval": {
    "title": {
      "en": "Owner decision",
      "zh-cn": "所有者决策"
    },
    "layer": {
      "en": "BOUND AUTHORITY",
      "zh-cn": "绑定权限"
    },
    "body": {
      "en": "Supported approval and question cards return a bound decision to the active runtime.",
      "zh-cn": "支持的审批与问题卡片将绑定决策返回当前运行时。"
    },
    "interfaces": [
      "Structured owner decision"
    ],
    "boundary": {
      "en": "Ordinary chat text, room membership and global administration do not substitute for the required owner.",
      "zh-cn": "普通聊天、房间成员关系与全局管理员不能替代所需所有者。"
    },
    "color": "blue"
  },
  "pool": {
    "title": {
      "en": "Optional resource pool",
      "zh-cn": "可选资源池"
    },
    "layer": {
      "en": "SERVER MANAGEMENT",
      "zh-cn": "服务器管理"
    },
    "body": {
      "en": "An applicant selects one pool and a positive ceiling; its owner reviews, native capacity is reserved and an executor qualifies.",
      "zh-cn": "申请人选择一个池和正数上限，所有者审核，原生额度保留后执行器确认资格。"
    },
    "interfaces": [
      "resource-pool-agents-v1"
    ],
    "boundary": {
      "en": "Capability gates must be enabled. Published capacity is not a live balance; approval alone is not readiness.",
      "zh-cn": "需开启能力开关；公布容量不是实时余额，批准不等于就绪。"
    },
    "color": "amber"
  },
  "federation": {
    "title": {
      "en": "Other Matrix homeservers",
      "zh-cn": "其他 Matrix 服务器"
    },
    "layer": {
      "en": "FEDERATION",
      "zh-cn": "联邦"
    },
    "body": {
      "en": "Authorized room events cross independent Matrix homeservers.",
      "zh-cn": "获授权房间事件可在独立 Matrix 服务器间交换。"
    },
    "interfaces": [
      "Matrix Server–Server API"
    ],
    "boundary": {
      "en": "Membership, reachability and keys still apply; coding-tool authority is not federated.",
      "zh-cn": "仍受成员、连通性与密钥限制；编程工具权限不会联邦共享。"
    },
    "color": "muted"
  },
  "workspace": {
    "title": {
      "en": "Local workspace / artifacts",
      "zh-cn": "本地工作区与产物"
    },
    "layer": {
      "en": "EXECUTOR DEVICE",
      "zh-cn": "执行器设备"
    },
    "body": {
      "en": "Allowed tools operate on the assigned workspace. Supported native file operations return artifacts to Matrix.",
      "zh-cn": "获准工具操作分配工作区，支持的原生文件操作将产物返回 Matrix。"
    },
    "interfaces": [
      "Scoped filesystem operations",
      "Matrix media"
    ],
    "boundary": {
      "en": "Codex/Claude native bridge: 64 files / 64 MiB per request. No blanket Octos file parity.",
      "zh-cn": "Codex、Claude 原生桥接每次最多 64 文件、64 MiB，不宣称 Octos 全面对等。"
    },
    "color": "teal"
  }
} satisfies Record<string,ComponentInfo>;
export type ComponentId=keyof typeof components;
export type Connection={id:string;from:ComponentId;to:ComponentId;label:Text;protocol:string;detail:Text;reverse?:boolean};
export const connections:Connection[]=[
  {
    "id": "client",
    "from": "robrix",
    "to": "palpo",
    "label": {
      "en": "Room events",
      "zh-cn": "房间事件"
    },
    "protocol": "Matrix Client–Server API",
    "detail": {
      "en": "The human SDK sends, syncs and renders Matrix events. Agent management uses separate Hagency APIs.",
      "zh-cn": "人的 SDK 发送、同步与呈现 Matrix 事件；Agent 管理使用独立 Hagency API。"
    },
    "reverse": true
  },
  {
    "id": "login",
    "from": "robrix",
    "to": "pasion",
    "label": {
      "en": "Sign in",
      "zh-cn": "登录"
    },
    "protocol": "OAuth / PKCE",
    "detail": {
      "en": "Browser authorization returns to the native SDK callback. Device keys still require publication and discovery.",
      "zh-cn": "浏览器授权返回原生 SDK 回调，设备密钥仍需发布和发现。"
    },
    "reverse": true
  },
  {
    "id": "management",
    "from": "robrix",
    "to": "backend",
    "label": {
      "en": "Manage Agent",
      "zh-cn": "管理 Agent"
    },
    "protocol": "Authenticated Hagency management API",
    "detail": {
      "en": "Create a personal Agent without a Project; owner and scope checks remain server-enforced.",
      "zh-cn": "无需 Project 即可创建个人 Agent，所有者与范围仍由服务器校验。"
    },
    "reverse": true
  },
  {
    "id": "registration",
    "from": "palpo",
    "to": "backend",
    "label": {
      "en": "Integrated AS",
      "zh-cn": "内置 AS"
    },
    "protocol": "Mandatory Appservice transaction roundtrip",
    "detail": {
      "en": "The single Server installs and checks its integrated application service. It is not per-Fleet onboarding.",
      "zh-cn": "单个 Server 安装并验证内置应用服务，而非每个 Fleet 单独接入。"
    },
    "reverse": true
  },
  {
    "id": "poll",
    "from": "bridge",
    "to": "backend",
    "label": {
      "en": "Work / receipts",
      "zh-cn": "工作 / 凭据"
    },
    "protocol": "Owner-device lease protocol",
    "detail": {
      "en": "The local executor handles eligible leases and retains original receipts. An acknowledgment is not model completion.",
      "zh-cn": "本地执行器处理符合条件的租约并保留原始凭据；确认接收不等于模型完成。"
    },
    "reverse": true
  },
  {
    "id": "device",
    "from": "devices",
    "to": "palpo",
    "label": {
      "en": "Encrypted room path",
      "zh-cn": "加密房间路径"
    },
    "protocol": "Matrix SDK device / sync / crypto",
    "detail": {
      "en": "Executor-device routing uses a real Agent crypto store. Server routing is distinct from decryption.",
      "zh-cn": "执行器设备路由使用真实 Agent 加密存储；服务器路由与解密分别处理。"
    },
    "reverse": true
  },
  {
    "id": "crypto-owner",
    "from": "bridge",
    "to": "devices",
    "label": {
      "en": "Device custody",
      "zh-cn": "设备保管"
    },
    "protocol": "Persistent SDK device and crypto state",
    "detail": {
      "en": "Keep crypto custody stable across daemon restart. Never open two stores for the same device.",
      "zh-cn": "重启守护进程时保持加密保管稳定，不能为同一设备打开两个存储。"
    },
    "reverse": true
  },
  {
    "id": "codex",
    "from": "bridge",
    "to": "codex",
    "label": {
      "en": "Run turn",
      "zh-cn": "执行 turn"
    },
    "protocol": "App Server JSON-RPC / stdio",
    "detail": {
      "en": "Bind turns, reports, permissions and completion to the original dispatch.",
      "zh-cn": "将 turn、报告、权限与完成绑定到原始调度。"
    },
    "reverse": true
  },
  {
    "id": "claude",
    "from": "bridge",
    "to": "claude",
    "label": {
      "en": "Run turn",
      "zh-cn": "执行 turn"
    },
    "protocol": "Managed native Claude CLI",
    "detail": {
      "en": "Use the configured native runtime and preserve supported execution policy.",
      "zh-cn": "使用配置的原生运行时，遵守支持的执行策略。"
    },
    "reverse": true
  },
  {
    "id": "oup",
    "from": "bridge",
    "to": "octos",
    "label": {
      "en": "Profiles / run",
      "zh-cn": "配置 / 执行"
    },
    "protocol": "Octos Unified Protocol / stdio",
    "detail": {
      "en": "Read actual installed Octos profiles and expose only owner-selected model configurations.",
      "zh-cn": "读取实际安装的 Octos 配置，只暴露所有者选定的模型配置。"
    },
    "reverse": true
  },
  {
    "id": "model-codex",
    "from": "codex",
    "to": "provider",
    "label": {
      "en": "Inference",
      "zh-cn": "推理"
    },
    "protocol": "Provider-specific API",
    "detail": {
      "en": "The selected runtime sends task content to its configured provider.",
      "zh-cn": "所选运行时将任务内容发送到配置的提供方。"
    },
    "reverse": true
  },
  {
    "id": "model-claude",
    "from": "claude",
    "to": "provider",
    "label": {
      "en": "Inference",
      "zh-cn": "推理"
    },
    "protocol": "Provider-specific API",
    "detail": {
      "en": "The selected runtime sends task content to its configured provider.",
      "zh-cn": "所选运行时将任务内容发送到配置的提供方。"
    },
    "reverse": true
  },
  {
    "id": "model-octos",
    "from": "octos",
    "to": "provider",
    "label": {
      "en": "Inference",
      "zh-cn": "推理"
    },
    "protocol": "Provider-specific API",
    "detail": {
      "en": "The selected runtime sends task content to its configured provider.",
      "zh-cn": "所选运行时将任务内容发送到配置的提供方。"
    },
    "reverse": true
  },
  {
    "id": "decision",
    "from": "approval",
    "to": "bridge",
    "label": {
      "en": "Bound decision",
      "zh-cn": "绑定决策"
    },
    "protocol": "Structured native approval / question response",
    "detail": {
      "en": "The owner decides the supported operation. Chat text is not approval.",
      "zh-cn": "所有者决策支持的操作，聊天文本不能构成审批。"
    },
    "reverse": true
  },
  {
    "id": "decision-ui",
    "from": "robrix",
    "to": "approval",
    "label": {
      "en": "Review",
      "zh-cn": "审阅"
    },
    "protocol": "Native owner control UI",
    "detail": {
      "en": "Render the exact supported request and return its correlated decision.",
      "zh-cn": "呈现准确支持的请求，返回对应决策。"
    },
    "reverse": true
  },
  {
    "id": "pool-request",
    "from": "robrix",
    "to": "pool",
    "label": {
      "en": "Request",
      "zh-cn": "申请"
    },
    "protocol": "Authenticated pool Agent request",
    "detail": {
      "en": "Select a pool, name and positive token ceiling; no Project or intermediate reservation in the new flow.",
      "zh-cn": "选择资源池、名称和正数 token 上限；新流程无需 Project 或中间预留。"
    },
    "reverse": false
  },
  {
    "id": "pool-owner",
    "from": "pool",
    "to": "backend",
    "label": {
      "en": "Owner approval / hold",
      "zh-cn": "所有者批准 / 额度保留"
    },
    "protocol": "Owner authority + native capacity ledger",
    "detail": {
      "en": "Only the selected owner decides; native hold, worker qualification and room admission still follow.",
      "zh-cn": "仅选定所有者决策，之后仍需原生额度保留、工作器资格确认与入房。"
    },
    "reverse": true
  },
  {
    "id": "federation",
    "from": "palpo",
    "to": "federation",
    "label": {
      "en": "Federation",
      "zh-cn": "联邦"
    },
    "protocol": "Matrix Server–Server API",
    "detail": {
      "en": "Room events federate under Matrix rules; executor authority remains separately checked.",
      "zh-cn": "房间事件依 Matrix 规则联邦互通，执行器权限仍独立校验。"
    },
    "reverse": true
  },
  {
    "id": "files",
    "from": "bridge",
    "to": "workspace",
    "label": {
      "en": "Tools / artifacts",
      "zh-cn": "工具 / 产物"
    },
    "protocol": "Scoped workspace and file operations",
    "detail": {
      "en": "Authorized local tools act within their policy; supported file bridges return artifacts.",
      "zh-cn": "获授权本地工具在策略范围内执行，由支持的文件桥接返回产物。"
    },
    "reverse": true
  }
];
export type ViewId='overview'|'registration'|'messages'|'runtimes';
export type ArchitectureView={id:ViewId;title:Text;description:Text;nodes:{id:ComponentId;x:number;y:number}[];edges:string[];initial:ComponentId};
export const architectureViews:ArchitectureView[]=[
  {
    "id": "overview",
    "title": {
      "en": "Whole system",
      "zh-cn": "整体架构"
    },
    "description": {
      "en": "Desktop, integrated Server and a local executor. Inspect a node or connection.",
      "zh-cn": "Desktop、集成 Server 与本地执行器。选择节点或连接查看详情。"
    },
    "nodes": [
      {
        "id": "robrix",
        "x": 0,
        "y": 0
      },
      {
        "id": "pasion",
        "x": 410,
        "y": 0
      },
      {
        "id": "backend",
        "x": 820,
        "y": 0
      },
      {
        "id": "palpo",
        "x": 0,
        "y": 245
      },
      {
        "id": "devices",
        "x": 410,
        "y": 245
      },
      {
        "id": "bridge",
        "x": 820,
        "y": 245
      },
      {
        "id": "federation",
        "x": 0,
        "y": 490
      },
      {
        "id": "provider",
        "x": 410,
        "y": 490
      },
      {
        "id": "pool",
        "x": 820,
        "y": 490
      }
    ],
    "edges": [
      "client",
      "login",
      "management",
      "registration",
      "poll",
      "device",
      "crypto-owner",
      "federation",
      "pool-request",
      "pool-owner"
    ],
    "initial": "bridge"
  },
  {
    "id": "registration",
    "title": {
      "en": "Identity and setup",
      "zh-cn": "身份与配置"
    },
    "description": {
      "en": "One integrated application service. Human sign-in and owner-device authorization are separate.",
      "zh-cn": "一个内置应用服务；人的登录与所有者设备授权独立。"
    },
    "nodes": [
      {
        "id": "robrix",
        "x": 0,
        "y": 0
      },
      {
        "id": "pasion",
        "x": 410,
        "y": 0
      },
      {
        "id": "backend",
        "x": 820,
        "y": 0
      },
      {
        "id": "palpo",
        "x": 0,
        "y": 245
      },
      {
        "id": "devices",
        "x": 410,
        "y": 245
      },
      {
        "id": "bridge",
        "x": 820,
        "y": 245
      }
    ],
    "edges": [
      "login",
      "management",
      "registration",
      "device",
      "poll",
      "crypto-owner"
    ],
    "initial": "backend"
  },
  {
    "id": "messages",
    "title": {
      "en": "Message → work → reply",
      "zh-cn": "消息 → 工作 → 回复"
    },
    "description": {
      "en": "Follow encrypted room events, owner decisions, local execution and its original receipts.",
      "zh-cn": "跟随加密房间事件、所有者决策、本地执行及原始凭据。"
    },
    "nodes": [
      {
        "id": "robrix",
        "x": 0,
        "y": 0
      },
      {
        "id": "backend",
        "x": 410,
        "y": 0
      },
      {
        "id": "bridge",
        "x": 820,
        "y": 0
      },
      {
        "id": "palpo",
        "x": 0,
        "y": 245
      },
      {
        "id": "devices",
        "x": 410,
        "y": 245
      },
      {
        "id": "codex",
        "x": 820,
        "y": 245
      },
      {
        "id": "approval",
        "x": 0,
        "y": 490
      },
      {
        "id": "workspace",
        "x": 410,
        "y": 490
      },
      {
        "id": "provider",
        "x": 820,
        "y": 490
      }
    ],
    "edges": [
      "client",
      "management",
      "poll",
      "device",
      "crypto-owner",
      "codex",
      "model-codex",
      "decision",
      "decision-ui",
      "files"
    ],
    "initial": "robrix"
  },
  {
    "id": "runtimes",
    "title": {
      "en": "Coding-agent runtimes",
      "zh-cn": "编程 Agent 运行时"
    },
    "description": {
      "en": "Codex, Claude and Octos have explicit native integrations. A protocol is not a promise of complete CLI parity.",
      "zh-cn": "Codex、Claude、Octos 各有明确原生接入；协议不构成完整 CLI 对等承诺。"
    },
    "nodes": [
      {
        "id": "backend",
        "x": 0,
        "y": 0
      },
      {
        "id": "bridge",
        "x": 410,
        "y": 0
      },
      {
        "id": "approval",
        "x": 820,
        "y": 0
      },
      {
        "id": "codex",
        "x": 0,
        "y": 245
      },
      {
        "id": "claude",
        "x": 410,
        "y": 245
      },
      {
        "id": "octos",
        "x": 820,
        "y": 245
      },
      {
        "id": "workspace",
        "x": 0,
        "y": 490
      },
      {
        "id": "provider",
        "x": 410,
        "y": 490
      }
    ],
    "edges": [
      "poll",
      "codex",
      "claude",
      "oup",
      "model-codex",
      "model-claude",
      "model-octos",
      "decision",
      "files"
    ],
    "initial": "octos"
  }
];
export const architectureUI={
  "label": {
    "en": "CURRENT SYSTEM",
    "zh-cn": "当前系统"
  },
  "title": {
    "en": "Follow a request into real work.",
    "zh-cn": "跟随请求，走进真实执行。"
  },
  "intro": {
    "en": "Native Desktop, one integrated Rust Server and owner-controlled local coding runtimes.",
    "zh-cn": "原生 Desktop、一个集成 Rust Server，以及由所有者控制的本地编程运行时。"
  },
  "snapshot": {
    "en": "Pinned source review · November 19, 2026",
    "zh-cn": "固定源码核验 · 2026 年 11 月 19 日"
  },
  "fallback": {
    "en": "The interactive map is optional. Every connection is readable below.",
    "zh-cn": "交互图是可选增强，下方可阅读所有连接。"
  },
  "textView": {
    "en": "Read the text reference",
    "zh-cn": "阅读文字参考"
  },
  "scope": {
    "en": "This map describes the reviewed main, not a live deployment or every published installer.",
    "zh-cn": "此图描述核验 main，并非实际部署或所有发布安装包。"
  },
  "inspect": {
    "en": "Inspect a component",
    "zh-cn": "查看组件"
  },
  "selected": {
    "en": "Select a component",
    "zh-cn": "选择组件"
  },
  "zoomIn": {
    "en": "Zoom in",
    "zh-cn": "放大"
  },
  "zoomOut": {
    "en": "Zoom out",
    "zh-cn": "缩小"
  },
  "fit": {
    "en": "Fit map",
    "zh-cn": "适应视图"
  },
  "reset": {
    "en": "Reset",
    "zh-cn": "重置"
  },
  "help": {
    "en": "Select a component or line. Keyboard controls and the text reference provide another way to explore.",
    "zh-cn": "选择组件或连线，也可使用键盘与文字参考。"
  },
  "component": {
    "en": "Component",
    "zh-cn": "组件"
  },
  "connection": {
    "en": "Connection",
    "zh-cn": "连接"
  },
  "interfaces": {
    "en": "Interfaces",
    "zh-cn": "接口"
  },
  "boundary": {
    "en": "Boundary",
    "zh-cn": "边界"
  }
};
