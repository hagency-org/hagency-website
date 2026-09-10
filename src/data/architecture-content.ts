import { b } from './site';

export const registrationSteps = [
  {title:b('Authorize one fleet','授权一个机群'),body:b('A Palpo administrator chooses an active local owner and outbound transport. The companion service persists a stable operation ID, random fleet ID and generated registration before contacting the homeserver. Retries reuse the operation; changed content conflicts.','Palpo 管理员选择活跃的本地所有者和出站传输。配套服务在联系 homeserver 前持久化操作 ID、随机机群 ID 与生成的注册；重试复用原操作，内容变化则报告冲突。')},
  {title:b('Install a scoped Appservice','安装限定范围的 Appservice'),body:b('The companion service calls POST /_palpo/admin/v1/appservices with administrator authority. It generates a representative localpart, an exclusive local-user namespace, as_token and hs_token. The registration URL points to the server-side relay, not the contributor’s laptop.','配套服务以管理员权限调用 POST /_palpo/admin/v1/appservices，生成代表身份的 localpart、独占本地用户命名空间、as_token 和 hs_token。注册 URL 指向服务器侧中继，而非贡献方电脑。')},
  {title:b('Read back and provision the representative','回读注册，创建代表身份'),body:b('The service reads the registration back and compares its ID, URL, tokens, sender and namespaces. In the reviewed Palpo implementation, an AS-authenticated whoami request with user_id provisions the representative; the exact MXID and appservice ownership are then checked. This provisioning behavior is Palpo-specific.','服务回读注册并比较 ID、URL、令牌、发送者与命名空间。在核验的 Palpo 实现中，带 user_id 的 AS 认证 whoami 请求会创建代表身份，随后检查准确的 MXID 和 appservice 归属。这种创建行为是 Palpo 特有实现。')},
  {title:b('Pair the owner’s Hagency','配对所有者的 Hagency'),body:b('Only the assigned owner can download this fleet’s configuration. The owner imports it through Hagency’s project-side onboarding. It contains the scoped Matrix registration and independent outbound machine credentials; it does not hand the Palpo administrator token to Hagency.','只有指定所有者可以下载该机群配置，并通过 Hagency 项目方接入流程导入。配置包含限定范围的 Matrix 注册和独立出站机器凭据，不会把 Palpo 管理员令牌交给 Hagency。')},
  {title:b('Start outbound polling and publication','开始出站轮询与状态发布'),body:b('Hagency starts separate matrix/work poll loops, stores deliveries locally, acknowledges their leases and publishes capabilities, heartbeats and request observations. The web service can answer from stored state even when a contributor is offline.','Hagency 启动独立的 matrix/work 轮询循环，在本地保存投递，确认租约，并发布能力、心跳与申请观察结果。即使贡献方离线，Web 服务也能从存储状态提供信息。')},
  {title:b('Prove the actual Matrix round trip','验证真实 Matrix 消息往返'),body:b('The owner’s connection action creates or recovers the reception room and emits com.hagency.connection.probe.v1. Palpo → relay → Hagency must deliver that exact event; current-generation transaction receipt and Hagency’s verified probe result establish the connection. A heartbeat alone cannot establish initial readiness.','所有者的连接操作创建或恢复接待房间，并发送 com.hagency.connection.probe.v1。Palpo → 中继 → Hagency 必须投递该确切事件；当前 generation 的事务接收记录与 Hagency 验证结果共同建立连接，单独心跳不能证明初次就绪。')},
  {title:b('Admit a project and allocate an agent','接纳项目并分配 Agent'),body:b('Project registration binds the owner and target room and establishes a separate private approval room. A named agent request still needs the contributor’s admission and allocation checks. The portal reports usable only after fulfillment and actual target-room membership are verified.','项目注册绑定所有者与目标房间，并建立独立私密审批房间。具名 Agent 申请仍需资源贡献方接纳和分配检查；完成资源交付且核验实际目标房间成员后，门户才报告可用。')},
];

export const registrationExample = `# Illustrative values; generated separately for every fleet.
id: hf_0123456789abcdef0123456789abcdef
url: http://palpo-web:8090/api/relay/v2/hf_0123456789abcdef0123456789abcdef
as_token: <APP_SERVICE_SECRET>
hs_token: <HOMESERVER_SECRET>
sender_localpart: hf_0123456789abcdef0123456789abcdef_representative
namespaces:
  users:
    - exclusive: true
      regex: '^@hf_0123456789abcdef0123456789abcdef_[a-z0-9_]+:example\\.org$'
  aliases: []
  rooms: []
rate_limited: true
receive_ephemeral: false`;

export const transportRows = [
  {operation:b('Publish capabilities and status','发布能力与状态'),api:'POST /api/fleet/v2/{fleetId}/updates',direction:b('Hagency → Palpo web','Hagency → Palpo Web'),meaning:b('A sequenced outbox carries heartbeat, resource snapshots and observed request state. Lost responses retry the identical sequence and payload.','带序号的发件箱承载心跳、资源快照与申请观察状态；响应丢失时重试相同序号和内容。')},
  {operation:b('Receive Matrix transactions','接收 Matrix 事务'),api:'GET /api/fleet/v2/{fleetId}/poll?lane=matrix',direction:b('Hagency requests → web responds','Hagency 发起请求 → Web 响应'),meaning:b('Long polling leases an original AS transaction from the durable Matrix lane. The HTTP connection is initiated by Hagency.','长轮询从持久 Matrix 队列租赁原始 AS 事务，HTTP 连接由 Hagency 发起。')},
  {operation:b('Receive work requests','接收工作请求'),api:'GET /api/fleet/v2/{fleetId}/poll?lane=work',direction:b('Hagency requests → web responds','Hagency 发起请求 → Web 响应'),meaning:b('A separate lane carries request/probe work with its source event and authority bindings. It does not bypass local admission.','独立队列承载包含来源事件及权限绑定的申请与探测工作，不绕过本地接纳检查。')},
  {operation:b('Acknowledge custody','确认接收保管'),api:'POST /api/fleet/v2/{fleetId}/ack',direction:b('Hagency → Palpo web','Hagency → Palpo Web'),meaning:b('After local persistence, ACK identifies delivery, lane and current lease token. It means receipt, not resource approval, task completion or permission to run a tool.','本地持久化后，ACK 指定投递、队列和当前租约令牌；它表示接收，不代表资源审批、任务完成或工具执行授权。')},
  {operation:b('Deliver an Appservice transaction','投递 Appservice 事务'),api:'PUT /api/relay/v2/{fleetId}/_matrix/app/v1/transactions/{txnId}',direction:b('Palpo homeserver → server-side web relay','Palpo homeserver → 服务器侧 Web 中继'),meaning:b('The relay validates hs_token and persists the transaction before HTTP 200. This is the Matrix AS hop, not an inbound call to Hagency.','中继校验 hs_token，持久化事务后返回 HTTP 200。这是 Matrix AS 链路，不是对 Hagency 的入站调用。')},
];

export const clientSteps = [
  {title:b('Choose the Matrix endpoint and sign in','选择 Matrix 入口并登录'),body:b('Robrix builds a matrix-sdk Client with the selected homeserver URL or server name. It uses the account’s supported login flow or restores an existing device session. The Matrix API origin and the companion admin portal may be different URLs.','Robrix 以所选 homeserver URL 或服务器名称构建 matrix-sdk Client，使用账户支持的登录方式或恢复已有设备会话。Matrix API 入口与配套管理门户可以使用不同 URL。')},
  {title:b('Synchronize without blocking the UI','同步时不阻塞界面'),body:b('The Makepad UI hands MatrixRequest actions to a Tokio worker. matrix-sdk-ui SyncService discovers native sliding sync and feeds room-list and per-room timeline updates back to the UI. Media, typing, receipts and membership use the SDK’s corresponding Matrix operations.','Makepad 界面将 MatrixRequest 操作交给 Tokio 工作线程；matrix-sdk-ui SyncService 发现原生 sliding sync，并将房间列表和各房间时间线更新交回界面。媒体、输入状态、回执和成员关系使用 SDK 对应的 Matrix 操作。')},
  {title:b('Keep thread and identity information','保留线程与身份信息'),body:b('Messages and replies use Matrix events and thread relations. Hagency validates the actual sender and stored room/thread binding; a displayed agent name or text mention is not an authorization credential.','消息与回复使用 Matrix 事件和线程关系。Hagency 验证实际发送者及存储的房间线程绑定，显示名称或文本提及不是授权凭据。')},
  {title:b('Keep encryption on the client side','在客户端维护加密'),body:b('Robrix persists its device and crypto state locally. Hagency’s supported encrypted paths use their own real Matrix devices and persistent crypto stores. An AS registration or server-side relay does not itself provide the keys to read encrypted rooms.','Robrix 在本地持久化设备与加密状态。Hagency 的受支持加密路径使用自己的真实 Matrix 设备及持久加密存储。AS 注册或服务器中继本身不会提供读取加密房间的密钥。')},
];

export const runtimeRows = [
  {name:'Claude Code',kind:b('Current headless task runner','当前无界面任务运行器'),transport:'claude -p · stream-json',flow:b('Fresh guarded process per dispatch; prompt on stdin; streamed activity/output; scoped MCP server. Context comes from durable Hagency state.','每次调度启动受管理的新进程，通过 stdin 传入提示词，流式输出活动与结果，并提供限定范围的 MCP 服务。上下文来自 Hagency 持久状态。'),limits:b('Permission checks follow the Claude runtime integration and configured tool policy.','权限检查遵循 Claude 运行时集成与配置的工具策略。')},
  {name:'Codex',kind:b('Current App Server task runner','当前 App Server 任务运行器'),transport:'codex app-server --stdio',flow:b('initialize → thread/start → turn/start. A fresh App Server thread receives rebuilt context. Notifications and native approval requests are bound to the dispatch.','initialize → thread/start → turn/start。新 App Server 线程接收重建上下文，通知和原生审批请求绑定到本次调度。'),limits:b('Command, file, permission and supported MCP approvals require validated operation identity and owner decisions.','命令、文件、权限及受支持的 MCP 审批，均需核验操作身份与所有者决定。')},
  {name:'Octos',kind:b('Explicit ACP adapter','明确选择的 ACP 适配器'),transport:'octos acp --profile coding-full',flow:b('ACP initialize → session/new → session/prompt. The reviewed adapter requires MCP servers in Octos’s own configuration; it ignores session/new mcpServers.','ACP initialize → session/new → session/prompt。核验的适配器要求在 Octos 自身配置中声明 MCP 服务，并忽略 session/new 的 mcpServers。'),limits:b('The reviewed capability declares no session loading and no blocking request_permission. Launch sandbox policy remains the control.','核验能力声明不支持加载会话，也不会阻塞等待 request_permission；启动时的沙箱策略仍是实际控制。')},
  {name:'Hermes',kind:b('Explicit ACP adapter','明确选择的 ACP 适配器'),transport:'hermes-acp',flow:b('Accepts session MCP configuration. Its ACP and MCP installation extras are both needed. Model selection follows Hermes configuration.','接受会话 MCP 配置，同时需要安装 ACP 与 MCP 扩展；模型选择遵循 Hermes 自身配置。'),limits:b('Hagency does not send unsupported --model or --cwd flags. Advertised session features are not a promise of task-runner parity.','Hagency 不发送不受支持的 --model 或 --cwd 参数；声明的会话能力不代表任务运行器完全等价。')},
  {name:'Codex ACP',kind:b('Separate adapter transport','独立适配器传输'),transport:'codex-acp',flow:b('A separate adapter wraps Codex and speaks ACP over stdio. It accepts session MCP configuration and reports progress through session/update.','独立适配器包装 Codex，通过 stdio 讲 ACP，接受会话 MCP 配置，并通过 session/update 报告进度。'),limits:b('Distinct from codex app-server. The reviewed adapter does not receive a filesystem sandbox flag; Hagency’s ACP permission callback restricts tool approval.','与 codex app-server 区分。核验的适配器未接收文件系统沙箱参数；Hagency 的 ACP 权限回调限制工具批准。')},
];

export const authorityRows = [
  ['as_token',b('Appservice → Matrix homeserver','Appservice → Matrix 服务器'),b('Acts for authorized local identities in its registered namespace. It is not the Palpo administrator token.','为已注册命名空间中的获授权本地身份执行操作，不是 Palpo 管理员令牌。')],
  ['hs_token',b('Matrix homeserver → AS relay','Matrix 服务器 → AS 中继'),b('Authenticates transaction delivery to the registered relay. It is not the fleet machine token.','认证向已注册中继的事务投递，不是机群机器令牌。')],
  ['Machine token + generation',b('Hagency → Palpo web transport','Hagency → Palpo Web 传输'),b('Authorizes one fleet’s polling, ACKs and state publication. Rotation changes generation and invalidates stale transport authority.','授权单个机群的轮询、ACK 和状态发布；轮换改变 generation，并使旧传输权限失效。')],
  ['Matrix user / device token',b('Robrix or agent device → homeserver','Robrix 或 Agent 设备 → homeserver'),b('Identifies a real user/device session. Room membership, power levels and encryption keys remain relevant.','标识真实用户与设备会话；房间成员、权限等级和加密密钥仍然适用。')],
  ['Browser session + CSRF',b('Browser → Palpo companion app','浏览器 → Palpo 配套应用'),b('Authorizes the signed-in human’s web actions. Administrative calls need the corresponding server authority.','授权已登录用户的网页操作；管理调用仍需对应服务器权限。')],
  ['Dispatch capability',b('Coding runtime / MCP → Hagency','编程运行时 / MCP → Hagency'),b('Scopes task and tool operations to a dispatch. Runtime execution approvals are independent of Matrix room roles.','将任务和工具操作限定在本次调度；运行时执行审批独立于 Matrix 房间角色。')],
  ['Provider credentials',b('Coding agent → model endpoint','编程 Agent → 模型入口'),b('Authorize model calls at the selected provider. The exact data destination follows that agent’s configuration.','在所选服务提供方授权模型调用；具体数据目的地由该 Agent 配置决定。')],
] as const;

export const storageRows = [
  {name:'Robrix2',body:b('Local session and encryption database; room/timeline cache.','本地会话与加密数据库、房间和时间线缓存。')},
  {name:'Palpo homeserver',body:b('Server-side Matrix accounts, room state/events and membership; media storage according to the server deployment.','服务器侧 Matrix 账户、房间状态与事件、成员关系，以及按服务器部署配置保存的媒体。')},
  {name:'Palpo companion web',body:b('Private SQLite state for registrations, fleet credentials, project operations, durable transport and audit records.','私有 SQLite 状态，保存注册、机群凭据、项目操作、持久传输与审计记录。')},
  {name:'Hagency',body:b('Resource and engagement state, room/task/session bindings, inbox/outbox and dispatch ledger; separate device crypto stores.','资源与接洽状态、房间任务会话绑定、收发件箱与调度账本，以及独立设备加密存储。')},
  {name:b('Coding agents','编程 Agent'),body:b('Assigned repositories, working files and task artifacts. Model context is reconstructed within the configured budget.','分配的代码仓库、工作文件与任务产物；模型上下文在配置预算内重建。')},
];

export const architectureSources = [
  {title:b('Hagency source','Hagency 源码'),url:'https://github.com/hagency-org/hagency',note:b('Reviewed local development revision 05dc46b: fleet-outbound-client/config/store, Matrix bridge, router/src/runner.ts and framework manifests.','核验本地开发版本 05dc46b：fleet-outbound-client/config/store、Matrix 桥接、router/src/runner.ts 与框架清单。')},
  {title:b('Palpo source and companion web service','Palpo 源码与配套 Web 服务'),url:'https://github.com/palpo-im/palpo',note:b('Reviewed local revision 8a0908cd: web-admin service, outbound transport, relay routes and dynamic Appservice admin API.','核验本地版本 8a0908cd：web-admin 服务、出站传输、中继路由与动态 Appservice 管理 API。')},
  {title:b('Robrix2 source','Robrix2 源码'),url:'https://github.com/Project-Robius-China/robrix2',note:b('Reviewed local revision d5523276: client builder, MatrixRequest worker, SyncService, message sending and persistent crypto.','核验本地版本 d5523276：客户端构建、MatrixRequest 工作线程、SyncService、消息发送与持久加密。')},
  {title:b('Matrix Application Service API','Matrix 应用服务 API'),url:'https://spec.matrix.org/latest/application-service-api/',note:b('Standard registration fields, namespace scoping, transaction delivery and token directions.','标准注册字段、命名空间范围、事务投递与令牌方向。')},
  {title:b('Matrix Client–Server API','Matrix 客户端与服务器 API'),url:'https://spec.matrix.org/latest/client-server-api/',note:b('Client authentication, room events, membership, media and encryption-related APIs.','客户端认证、房间事件、成员关系、媒体与加密相关 API。')},
  {title:b('Matrix Server–Server API','Matrix 服务器间 API'),url:'https://spec.matrix.org/latest/server-server-api/',note:b('Federated communication between independent homeservers.','独立 homeserver 之间的联邦通信。')},
];
