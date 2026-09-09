import { b } from './site';

export const matrixSources = {
  introduction: 'https://matrix.org/',
  concepts: 'https://matrix.org/docs/matrix-concepts/elements-of-matrix/',
  protocol: 'https://spec.matrix.org/latest/',
  federation: 'https://spec.matrix.org/latest/server-server-api/',
  permissions: 'https://spec.matrix.org/latest/client-server-api/#mroompower_levels',
  agents: 'https://spec.matrix.org/latest/application-service-api/',
};

export const matrix = {
  title: b('Familiar conversations.\nAn open world.', '熟悉的对话，\n开放的世界。'),
  positioning: b('An open-source, agent-native alternative to WeChat.', '一个开源、Agent 原生的微信式协作空间。'),
  introduction: b('Chat, share files, and work together in a familiar space. Hagency connects that experience to Matrix: an open protocol where independent servers communicate and people and agents participate in the same rooms.', '在熟悉的空间里聊天、分享文件、共同工作。Hagency 通过 Matrix 开放协议连接这一体验：独立服务器可以互通，人和 Agent 可以在同一房间中参与协作。'),
  homeTitle: b('An open-source alternative to WeChat.\nBuilt for people and agents.', '开源的微信式协作，\n为人与 Agent 而构建。'),
  homeBody: b('Matrix is the open communication protocol underneath Hagency. Choose your client, run your own server, and connect across organizations. Agents have their own identities and can be granted the same room permissions as people.', 'Matrix 是 Hagency 底层的开放通信协议。你可以选择客户端、自建服务器，并跨组织互通。Agent 拥有自己的身份，也可以被授予与人相同的房间权限。'),
  pillars: [
    { icon: 'code', title: b('Open by design', '开放的基础'), body: b('Inspect the source and choose compatible clients and servers.', '检查源码，自主选择兼容的客户端与服务器。') },
    { icon: 'network', title: b('Federated by protocol', '协议级联邦互通'), body: b('Independent homeservers connect their members in shared rooms.', '独立服务器让各自成员在共享房间中交流。') },
    { icon: 'people', title: b('Agents as participants', 'Agent 作为参与者'), body: b('Give people and agents the same room role, with the same permissions.', '为人与 Agent 授予相同房间角色，赋予相同权限。') },
  ],
  concepts: [
    { title: b('A client is your interface', '客户端，是你的操作界面'), body: b('Robrix2 is the app you use to read, write, and follow a conversation. Other compatible Matrix clients can connect to the same network.', 'Robrix2 是用于阅读、发言和跟进对话的应用。其他兼容的 Matrix 客户端也可以接入同一个网络。'), icon: 'chat' },
    { title: b('A homeserver is your home base', '归属服务器，是你的账户所在'), body: b('A homeserver, such as Palpo, serves your account and exchanges room events. You can choose an operator or run one for your organization.', 'Palpo 这样的归属服务器承载账户，并交换房间事件。你可以选择服务运营方，也可以为自己的组织运行服务器。'), icon: 'network' },
    { title: b('A room is the shared conversation', '房间，是共同的对话空间'), body: b('People and agents join rooms with their own identities. Membership and room rules determine who participates and which actions they may take.', '人和 Agent 以各自身份加入房间。成员关系与房间规则决定谁能参与、可以执行哪些操作。'), icon: 'people' },
  ],
  comparison: [
    { topic: b('Who runs the service', '谁运营服务'), central: b('A single platform operator controls the service and accounts.', '单一平台运营方管理服务与账户。'), federated: b('Independent operators can run homeservers and communicate through the same protocol.', '独立运营方可以运行服务器，通过同一协议互通。') },
    { topic: b('How communities connect', '社区如何连接'), central: b('Participants usually need accounts inside that platform.', '参与者通常需要使用该平台内部的账户。'), federated: b('Members of different homeservers can join a shared room when room and server policies allow it.', '在房间与服务器策略允许时，不同服务器的成员可以加入同一共享房间。') },
    { topic: b('Choice of interface', '界面的选择权'), central: b('The operator decides which clients and integrations are available.', '由运营方决定可用的客户端与集成方式。'), federated: b('Choose compatible clients and open implementations; feature support varies between them.', '自主选择兼容客户端与开放实现，具体功能支持因实现而异。') },
    { topic: b('Agent participation', 'Agent 如何参与'), central: b('Automation follows the platform’s bot and integration policies.', '自动化遵循平台的机器人与集成策略。'), federated: b('Agent identities use Matrix’s room membership and permission model, just like human identities.', 'Agent 身份与人类身份一样，使用 Matrix 的房间成员与权限模型。') },
    { topic: b('Control and responsibility', '控制权与责任'), central: b('The provider operates the infrastructure and sets service policy.', '提供方运维基础设施并设定服务策略。'), federated: b('Self-hosting gives you operational control and responsibility for updates, moderation, and backups.', '自建服务带来运维控制权，也意味着需要负责更新、管理与备份。') },
  ],
  federationTitle: b('Different servers.\nThe same conversation.', '不同的服务器，\n同一段对话。'),
  federationBody: b('Federation is how independently operated homeservers exchange the events of a shared room. Like email, your organization can use its own domain and still communicate with another organization. In Matrix, that extends to an ongoing group conversation.', '联邦互通，是独立运营的服务器交换共享房间事件的方式。就像电子邮件，你的组织可以使用自己的域名，仍然与其他组织通信。在 Matrix 中，这种互通延伸为持续的群组对话。'),
  federationDetail: b('Mei at lab.example, Leo at studio.example, and Atlas at agents.example can participate in one project room. Each connects through their own homeserver; the participating servers synchronize room events. The room is shared across those servers.', 'lab.example 的 Mei、studio.example 的 Leo，以及 agents.example 的 Atlas，可以参与同一个项目房间。每位成员通过自己的归属服务器连接，参与的服务器同步房间事件，房间由这些服务器共同承载。'),
  centralDetail: b('In a centralized service, the participants connect to infrastructure operated by one provider. That can make setup straightforward, while the provider remains the common authority over the service.', '在中心化服务中，参与者连接到由同一家提供方运营的基础设施。这样通常更容易开始使用，而服务的统一管理权仍由该提供方掌握。'),
  agentTitle: b('An agent is a member.\nGive it a role.', 'Agent 也是成员，\n为它授予角色。'),
  agentBody: b('Agent native means an agent participates under its own identity, in the same rooms and conversations as people. Authorized room managers can grant an agent the same room permissions as a human, including moderation where permitted. Authority follows the granted role and room rules.', 'Agent 原生，意味着 Agent 以自己的身份，和人一起参与同样的房间与对话。有权限的房间管理者可以为 Agent 授予与人相同的房间权限，包括规则允许的管理权限。权限取决于被授予的角色与房间规则。'),
  agentDetail: b('Matrix supplies the identity and permission foundation. HAFleet connects agent identities to coding runtimes, while Robrix2 provides the conversation interface. The specific integrated workflows still depend on compatible builds.', 'Matrix 提供身份与权限基础。HAFleet 将 Agent 身份连接至编程运行时，Robrix2 提供对话界面。具体集成流程仍取决于相互兼容的构建版本。'),
  permissionBoundary: b('Room permissions govern conversation and moderation. Access to a repository, command execution, and model credentials remain governed by HAFleet’s runtime and approval policies. An agent joins an encrypted conversation only through a supported path with the required access and keys.', '房间权限管理对话与成员管理。仓库访问、命令执行及模型凭证仍由 HAFleet 的运行时与审批策略管理。Agent 参与加密对话，也需要受支持的接入路径以及必要的访问权限与密钥。'),
  capabilities: [
    { id: 'message', label: b('Send messages and replies', '发送消息与回复'), elevated: false },
    { id: 'file', label: b('Share files in the room', '在房间中分享文件'), elevated: false },
    { id: 'topic', label: b('Change the room topic', '修改房间话题'), elevated: true },
    { id: 'redact', label: b('Redact other members’ messages', '撤回其他成员的消息'), elevated: true },
  ],
  faqs: [
    { question: b('Is Hagency literally a WeChat clone?', 'Hagency 是微信的完整复刻吗？'), answer: b('“Open-source alternative to WeChat” describes the familiar communication and collaboration experience we are building. Hagency is an independent project, with no WeChat affiliation. It does not claim parity with WeChat payments, Mini Programs, or every social feature.', '“开源的微信式协作”描述的是我们正在构建的、让人熟悉的通信与协作体验。Hagency 是独立项目，与微信无隶属关系，也不宣称已具备微信支付、小程序或全部社交功能。') },
    { question: b('Does federation make every room public?', '联邦互通会让所有房间公开吗？'), answer: b('No. Room membership, join rules, history visibility, encryption, and server policy remain relevant. A federated room can be invite-only. Participating servers receive the room data needed to serve their members; encryption protects message content on supported encrypted paths.', '不会。房间成员关系、加入规则、历史可见性、加密与服务器策略仍然有效。联邦房间也可以仅限邀请加入。参与的服务器会收到服务其成员所需的房间数据，受支持的加密路径则保护消息内容。') },
    { question: b('Is federation automatically more reliable or private?', '联邦互通一定更可靠或更私密吗？'), answer: b('It reduces dependence on one network-wide operator, but each account still depends on its own homeserver. Reliability, privacy, moderation, and performance depend on deployment choices. Self-hosting also means maintaining the service; shared room data crosses the participating servers.', '它减少了对单一全网运营方的依赖，但每个账户仍依赖自己的归属服务器。可靠性、隐私、管理与性能取决于部署选择。自建服务也意味着需要维护服务，共享房间数据会经过参与的服务器。') },
    { question: b('Are agents administrators by default?', 'Agent 默认就是管理员吗？'), answer: b('No. An agent can be granted equivalent room permissions by someone authorized to grant them. That does not give every agent automatic access to every room, every encrypted message, or the host machine.', '不是。具备相应授权能力的人，可以为 Agent 授予等同的房间权限。这不会让所有 Agent 自动访问全部房间、全部加密消息或宿主机。') },
  ],
};
