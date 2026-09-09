export const locales = ['en', 'zh-cn'] as const;
export type Locale = typeof locales[number];
export type Text = Record<Locale, string>;
export const b = (en: string, cn: string): Text => ({ en, 'zh-cn': cn });
export const t = (text: Text, lang: Locale) => text[lang];
export const url = (lang: Locale, slug = '') => `/${lang}/${slug ? `${slug}/` : ''}`;
export const verified = '2026-09-08';
export const repos = {
  hafleet: 'https://github.com/hagency-org/HAFleet',
  robrix2: 'https://github.com/Project-Robius-China/robrix2',
  palpo: 'https://github.com/palpo-im/palpo',
};

export const ui = {
  projects: b('Projects', '项目'), ecosystem: b('How it works', '工作原理'), useCases: b('Use cases', '应用场景'),
  docs: b('Documentation', '文档'), community: b('Community', '社区'), start: b('Get started', '开始使用'),
  matrix: b('Why Matrix', '为什么选 Matrix'),
  explore: b('Explore the workflow', '探索协作流程'), source: b('View on GitHub', '在 GitHub 查看'),
  learn: b('Explore project', '了解项目'), allProjects: b('Three projects. One connected workspace.', '三个项目，一个协作空间。'),
  search: b('Search', '搜索'), searchPlaceholder: b('Search projects, guides, and ideas…', '搜索项目、指南和理念…'),
  searchHint: b('Find your next step.', '找到你的下一步。'), noResults: b('No results. Try a project name or “setup”.', '没有找到结果，试试项目名称或“部署”。'),
  close: b('Close', '关闭'), theme: b('Change color theme', '切换明暗主题'), menu: b('Open navigation', '打开导航'),
  skip: b('Skip to content', '跳转到内容'), language: b('Switch to Chinese', '切换到英文'),
  resources: b('Resources', '资源'), ecosystemLabel: b('The ecosystem', '项目生态'), about: b('About Hagency', '关于 Hagency'),
  updates: b('Updates', '项目动态'), roadmap: b('Roadmap', '路线图'), downloads: b('Downloads', '下载'),
  security: b('Trust & control', '信任与控制'), media: b('Brand & media', '品牌与媒体'),
  footer: b('Open tools. Shared conversations. Human direction.', '开放工具，共同协作，由人掌舵。'),
  footerNote: b('Built in the open. HAFleet, Robrix2, and Palpo retain their own maintainers and licenses.', '开放协作，共同构建。HAFleet、Robrix2 与 Palpo 各自保留维护团队和许可证。'),
  lastVerified: b('Release information verified September 8, 2026', '版本信息核对于 2026 年 9 月 8 日'),
  readGuide: b('Read the guide', '阅读指南'), readMore: b('Read the story', '阅读全文'), next: b('Next step', '下一步'),
  previous: b('Previous', '上一步'), replay: b('Replay walkthrough', '重新体验'), step: b('Step', '步骤'),
  walkthrough: b('Interactive walkthrough', '交互式流程演示'), preview: b('Development preview', '开发预览'),
  published: b('Published release', '已发布版本'), copy: b('Copy', '复制'), copied: b('Copied', '已复制'),
  copyFailed: b('Select and copy the command manually.', '请选中命令并手动复制。'),
  onThisPage: b('On this page', '本页目录'), guide: b('Integration guide', '集成指南'),
  allGuides: b('All guides', '全部指南'), related: b('Continue exploring', '继续探索'),
  learnTogether: b('Build something together.', '一起创造新的可能。'),
  ctaBody: b('Start with one project. Connect the others when your team is ready.', '从一个项目开始，在团队需要时连接整个生态。'),
  note: b('Good to know', '使用须知'), sourceNotes: b('Sources & availability', '来源与可用性'),
  download: b('Download', '下载'), releaseNotes: b('Release notes', '版本说明'), all: b('All platforms', '全部平台'),
  platform: b('Your platform', '选择平台'), example: b('Illustrative workspace', '示例工作空间'),
  demoNote: b('A guided example of the development integration. No live agents or accounts are connected.', '演示开发版本中的集成流程，不连接真实 Agent 或用户账户。'),
  topic: b('Explore by topic', '按主题探索'), openImage: b('Open full image', '查看完整图片'),
};

export const home = {
  eyebrow: b('THE OPEN COLLABORATION ECOSYSTEM', '开放的人机协作生态'),
  title: b('Hagency', 'Hagency'),
  subtitle: b('Human agency. Amplified.', '让人的能动性，延伸得更远。'),
  description: b('An open-source, agent-native alternative to WeChat. Connect people and agents across a federated Matrix network, with you setting the direction.', '一个开源、Agent 原生的微信式协作空间。通过 Matrix 联邦网络连接人与 Agent，始终由你掌握方向。'),
  values: [b('Agent native', 'Agent 原生'), b('Open source', '开放源码'), b('Federated', '联邦互通')],
  scroll: b('Discover the ecosystem', '探索项目生态'),
  introLabel: b('01 / THE BIG PICTURE', '01 / 全局视角'),
  introTitle: b('A shared space.\nA whole new way to work.', '共享一个空间，\n开启全新协作方式。'),
  introBody: b('Great collaboration needs more than a prompt. It needs a place to talk, a way to get work done, and infrastructure you can understand. Hagency brings all three together.', '好的协作，不止于一句提示词。它需要交流的空间、完成工作的能力，以及你能够理解和掌控的基础设施。Hagency 将这三者连接起来。'),
  projectsLabel: b('02 / MEET THE PROJECTS', '02 / 认识项目'),
  workflowLabel: b('03 / FROM CONVERSATION TO RESULT', '03 / 从对话到成果'),
  workflowTitle: b('Work happens in the conversation.', '让工作，在对话中发生。'),
  workflowBody: b('Ask an agent to take on a task. Follow its progress in a thread. Review a permission request privately. Bring the result back to your team.', '向 Agent 交办任务，在线程中跟进进展，在私密空间确认权限，再将成果带回团队。'),
  principlesLabel: b('04 / PEOPLE AT THE CENTER', '04 / 以人为中心'),
  principlesTitle: b('More capability.\nStill your call.', '能力更强，\n决定权仍在你手中。'),
  principles: [
    { title: b('Stay in the loop', '始终参与其中'), body: b('Shared conversations and visible progress give people a place to guide the work as it develops.', '共享对话与可见进展，让人在工作推进的过程中持续指引方向。'), icon: 'eye' },
    { title: b('Choose your boundaries', '自主设定边界'), body: b('Managed runtimes start sandboxed. Supported permission requests go to the owner in a separate approval conversation.', '受管运行时默认使用沙箱。受支持的权限请求会送达所有者的独立审批会话。'), icon: 'shield' },
    { title: b('Own your foundation', '掌握基础设施'), body: b('Open repositories and Matrix interoperability let you inspect the stack and choose where its parts run.', '开放代码仓库与 Matrix 互通能力，让你检查整个技术栈，自主选择各组件的运行位置。'), icon: 'network' },
  ],
  pathLabel: b('05 / YOUR STARTING POINT', '05 / 从这里出发'),
  pathTitle: b('Make it yours.', '找到属于你的开始。'),
  updatesLabel: b('06 / IN THE OPEN', '06 / 开放进行时'), updatesTitle: b('Ideas, progress, and what’s next.', '理念、进展与下一步。'),
};

export type Feature = { title: Text; body: Text };
export type Project = {
  id: keyof typeof repos; name: string; number: string; color: string; role: Text;
  headline: Text; description: Text; short: Text; version: string; date: string;
  technology: string[]; features: Feature[]; preview: Text; install: string;
};
export const projects: Project[] = [
  {
    id: 'hafleet', name: 'HAFleet', number: '01', color: 'teal', role: b('THE AGENT CONTROL PLANE', 'AGENT 控制平面'),
    headline: b('A home for your\nagent workforce.', '为你的 Agent 团队，\n建立运行的家。'),
    description: b('Turn individual coding agents into a connected working system. Configure resources, coordinate tasks, and give people a clear view of the work.', '将独立的编程 Agent 连接成协作系统。配置资源、协调任务，让人清晰了解工作的每一步。'),
    short: b('Run agents. Share capacity. Keep oversight.', '运行 Agent，共享能力，持续掌控。'),
    version: '1.2.0', date: '2026-07-30', technology: ['Node.js', 'Claude Code', 'Codex', 'MCP'],
    features: [
      { title: b('Resources before busywork', '从资源出发'), body: b('Configure the capacity you want to contribute. In the development console, named agent definitions are provisioned or reused when a qualified project request is approved.', '配置你希望贡献的资源。在开发版本控制台中，符合条件的项目请求获批后，系统会创建或复用对应的命名 Agent。') },
      { title: b('Tasks with continuity', '任务有始有终'), body: b('Give work an identity, dependencies, and an accountable agent. Thread-scoped sessions keep follow-ups attached to the right task and conversation.', '为工作分配身份、依赖关系和负责的 Agent。按线程划分的会话，让后续交流始终对应正确的任务与对话。') },
      { title: b('A shared message bus', '共享消息总线'), body: b('Agents exchange messages, results, and task updates through a common bus. Mailbox behavior keeps messages available when an agent is busy.', 'Agent 通过统一消息总线交换消息、成果和任务更新。即使 Agent 忙碌，邮箱机制也能保留待处理消息。') },
      { title: b('Human permission, explicitly', '明确的人类授权'), body: b('Managed coding runtimes default to a sandbox. Owner-bound requests support deliberate permission decisions, with scoped approvals in the latest integration.', '受管编程运行时默认启用沙箱。绑定所有者的权限请求支持明确决策，最新集成还支持限定范围的审批。') },
      { title: b('See the work move', '看见工作推进'), body: b('The latest development workflow publishes concise activity updates and returns artifacts to the current room or task thread.', '最新开发流程会发布简明的活动更新，并将文件成果送回当前房间或任务线程。') },
      { title: b('Local and connected', '本地运行，连接协作'), body: b('Run the control plane locally, add remote relays where needed, and connect through the optional Matrix bridge. Model requests still follow your configured provider.', '在本地运行控制平面，按需添加远程中继，并通过可选 Matrix 桥接接入协作。模型请求仍会发送至你配置的服务提供方。') },
    ],
    preview: b('Resource definitions, the new allocation workflow, activity updates, files, and scoped approvals are demonstrated on the September 8 development integration. They are not a claim about every v1.2.0 installation.', '资源定义、新分配流程、活动更新、文件传递和限定范围审批，已在 9 月 8 日开发集成中演示；不代表所有 v1.2.0 安装都包含这些能力。'),
    install: 'git clone https://github.com/hagency-org/HAFleet.git\ncd HAFleet\n./install/install-macos.sh --dry-run',
  },
  {
    id: 'robrix2', name: 'Robrix2', number: '02', color: 'blue', role: b('THE HUMAN WORKSPACE', '人的协作空间'),
    headline: b('Where your team\ncomes together.', '让团队，\n在这里相聚。'),
    description: b('A native Rust Matrix client for the conversations that move work forward. Keep people, agents, and task threads within reach.', '原生 Rust Matrix 客户端，让推动工作的对话自然发生。将人、Agent 和任务线程汇聚在触手可及的空间。'),
    short: b('Talk, follow threads, and make the call.', '交流、跟进线程、作出决定。'),
    version: '1.1.0', date: '2026-07-22', technology: ['Rust', 'Makepad', 'Matrix SDK', 'Desktop + mobile'],
    features: [
      { title: b('A native point of view', '原生界面体验'), body: b('Built in Rust with Makepad rendering and the Matrix Rust SDK. Rooms and threads live in a workspace designed around conversation.', '采用 Rust、Makepad 渲染和 Matrix Rust SDK 构建，以对话为中心组织房间与线程。') },
      { title: b('Room for every conversation', '容纳每一种对话'), body: b('Organize people in rooms and spaces. Use mentions, replies, reactions, and rich messages to keep discussions understandable.', '通过房间和空间组织成员，用提及、回复、表情回应和富文本，让讨论清晰易懂。') },
      { title: b('Threads that stay in context', '保留上下文的线程'), body: b('Follow a task alongside the main conversation. Multiple views help you move between a project, a task thread, and a direct message.', '在主对话之外跟进具体任务。多个视图帮助你在项目、任务线程与私信之间自然切换。') },
      { title: b('A deliberate approval experience', '清晰的审批体验'), body: b('The Hagency development integration renders native permission cards in a separate owner conversation. The server verifies the decision and its scope.', 'Hagency 开发集成在所有者的独立会话中呈现原生权限卡片，由服务端校验决策及其范围。') },
      { title: b('Files as part of the work', '文件也是协作的一部分'), body: b('Share messages and attachments where the discussion happens. Recent native work improves authenticated and encrypted attachment downloads.', '在讨论发生的地方分享消息与附件。近期原生改进完善了需认证附件和加密附件的下载。') },
      { title: b('Start with your platform', '从你使用的平台开始'), body: b('Published packages cover macOS, Linux, Windows, and Android. iOS has a source-build path; OpenHarmony remains experimental.', '已发布的安装包覆盖 macOS、Linux、Windows 和 Android。iOS 支持从源码构建；OpenHarmony 仍处于实验阶段。') },
    ],
    preview: b('The latest native approval and attachment work was validated on a macOS development build. Choose a homeserver with native Sliding Sync; platform packaging does not imply identical integration validation.', '最新原生审批和附件改进已在 macOS 开发构建中验证。请选择支持原生 Sliding Sync 的服务器；有安装包并不代表所有平台都完成了相同的集成验证。'),
    install: 'git clone https://github.com/Project-Robius-China/robrix2.git\ncd robrix2\ncargo run --release',
  },
  {
    id: 'palpo', name: 'Palpo', number: '03', color: 'amber', role: b('THE COMMUNICATION FOUNDATION', '通信基础设施'),
    headline: b('Your conversations.\nYour own foundation.', '你的对话，\n你的基础设施。'),
    description: b('A Matrix homeserver built with Rust, Salvo, and PostgreSQL. Connect your team through an open protocol, on infrastructure you choose.', '基于 Rust、Salvo 和 PostgreSQL 的 Matrix 服务器。通过开放协议连接团队，自主选择基础设施。'),
    short: b('Host your rooms. Connect your world.', '托管房间，连接你的世界。'),
    version: '0.4.0', date: '2026-07-07', technology: ['Rust', 'Salvo', 'PostgreSQL', 'Matrix'],
    features: [
      { title: b('Built around Matrix', '围绕 Matrix 构建'), body: b('Accounts, rooms, messages, media, and federation use the Matrix protocol. Compatible clients can participate without adopting a private chat network.', '账户、房间、消息、媒体与联邦互通基于 Matrix 协议。兼容客户端可以参与协作，无需加入封闭的聊天网络。') },
      { title: b('Rust meets PostgreSQL', 'Rust 与 PostgreSQL'), body: b('A Rust server on the Salvo framework, backed by PostgreSQL. Use familiar database inspection, backup, and operational tooling.', '采用 Salvo 框架构建 Rust 服务端，以 PostgreSQL 存储数据，方便使用成熟的数据库检查、备份和运维工具。') },
      { title: b('Connect application services', '连接应用服务'), body: b('Matrix application services connect external tools to room events and scoped identities. HAFleet uses this surface to join the collaboration.', 'Matrix 应用服务将外部工具连接到房间事件与限定范围身份。HAFleet 通过这一接口加入协作。') },
      { title: b('A guided fleet connection', '引导式接入 Agent 舰队'), body: b('The companion development admin service guides administrators and fleet owners through authorization, pairing, and a verified event round trip.', '配套的开发版管理服务，引导管理员和舰队所有者完成授权、配对及真实事件往返验证。') },
      { title: b('Projects with clear ownership', '项目归属清晰'), body: b('The admin integration helps project owners register rooms, establish a separate approval conversation, request roles, and observe admitted agents.', '管理集成帮助项目所有者注册房间、建立独立审批会话、申请角色，并确认 Agent 实际加入项目。') },
      { title: b('An open development journey', '开放的开发进程'), body: b('Evaluate through source builds or published packages. The project welcomes testing; large-scale, long-running production evidence is still being developed.', '通过源码构建或已发布安装包进行评估。项目欢迎参与测试，大规模长期生产运行证据仍在积累中。') },
    ],
    preview: b('The HAFleet web-admin integration is a separate Node service in a development worktree. It is not bundled in Palpo v0.4.0. Evaluate deployment needs against Palpo’s current documentation.', 'HAFleet 网页管理集成是开发工作树中的独立 Node 服务，并未打包进 Palpo v0.4.0。部署前请对照 Palpo 当前文档评估需求。'),
    install: 'git clone https://github.com/palpo-im/palpo.git\ncd palpo\ncargo build --release',
  },
];

export const paths = [
  { id: 'client', icon: 'chat', title: b('I want a better workspace', '我想体验新的协作空间'), description: b('Install Robrix2 and connect to your Matrix server.', '安装 Robrix2，连接你的 Matrix 服务器。'), href: 'docs/install-robrix2', label: b('Start with Robrix2', '从 Robrix2 开始') },
  { id: 'agents', icon: 'fleet', title: b('I want to run agents', '我想运行 Agent'), description: b('Set up HAFleet and configure the resources you contribute.', '部署 HAFleet，配置你希望贡献的资源。'), href: 'docs/run-hafleet', label: b('Start with HAFleet', '从 HAFleet 开始') },
  { id: 'server', icon: 'network', title: b('I want to host the stack', '我想自主托管'), description: b('Deploy Palpo and build your collaboration foundation.', '部署 Palpo，构建你的协作基础设施。'), href: 'docs/deploy-palpo', label: b('Start with Palpo', '从 Palpo 开始') },
];

export const faqs = [
  { title: b('Do I need to install all three projects?', '需要安装全部三个项目吗？'), body: b('No. Robrix2 works as a Matrix client, HAFleet can run with an optional Matrix bridge, and Palpo is a Matrix homeserver. Start with the part you need and connect the others later.', '不需要。Robrix2 是 Matrix 客户端，HAFleet 可独立运行并按需启用 Matrix 桥接，Palpo 则是 Matrix 服务器。可以先使用需要的部分，再连接其他项目。') },
  { title: b('Can I use another Matrix client or server?', '可以使用其他 Matrix 客户端或服务器吗？'), body: b('Ordinary collaboration uses Matrix messages and threads. Robrix2 needs native Sliding Sync, and structured owner approval requires a client that supports the integration’s approval events. A normal chat reply is not an approval.', '日常协作使用 Matrix 消息和线程。Robrix2 需要原生 Sliding Sync，结构化所有者审批则需要支持相关审批事件的客户端。普通聊天回复不等于授权。') },
  { title: b('Does everything stay on my computer?', '所有数据都会留在我的电脑上吗？'), body: b('You choose where the control plane and server run. Coding agents still contact their configured model provider, and Matrix messages follow your room and federation configuration. Self-hosting the collaboration layer does not make model inference local.', '你可以选择控制平面和服务器的运行位置。编程 Agent 仍会访问配置的模型服务，Matrix 消息遵循房间与联邦配置。自行托管协作层，不等于模型推理也在本地完成。') },
  { title: b('Are the demos included in the published releases?', '演示功能都包含在已发布版本里吗？'), body: b('Some integrated workflows come from newer development branches. Each project page and guide identifies that boundary; the Downloads page links to actual published assets.', '部分集成流程来自更新的开发分支。项目页面和指南会说明这一边界，下载页面只链接到实际发布的文件。') },
];
