// Historical project IDs are retained for existing links and archived asset references.
export const locales = ['en', 'zh-cn'] as const;
export type Locale = typeof locales[number];
export type Text = Record<Locale, string>;
export const b = (en: string, cn: string): Text => ({ en, 'zh-cn': cn });
export const t = (text: Text, lang: Locale) => text[lang];
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
export const url = (lang: Locale, slug = '') => asset(`${lang}/${slug ? `${slug}/` : ''}`);
export const verified = '2026-11-19';
export const repos = {hagency:'https://github.com/hagency-org/hagency-server',robrix2:'https://github.com/hagency-org/hagency-desktop',palpo:'https://github.com/palpo-im/palpo'};
export type Feature = { title: Text; body: Text };
export type Project = {id: keyof typeof repos; name:string; number:string; color:string; role:Text; headline:Text; description:Text; short:Text; version:string; date:string; technology:string[]; features:Feature[]; preview:Text; install:string};

export const ui = {
  "projects": {
    "en": "Projects",
    "zh-cn": "项目"
  },
  "ecosystem": {
    "en": "How it works",
    "zh-cn": "工作原理"
  },
  "useCases": {
    "en": "Use cases",
    "zh-cn": "应用场景"
  },
  "docs": {
    "en": "Documentation",
    "zh-cn": "文档"
  },
  "community": {
    "en": "Community",
    "zh-cn": "社区"
  },
  "start": {
    "en": "Get started",
    "zh-cn": "开始使用"
  },
  "matrix": {
    "en": "Why Matrix",
    "zh-cn": "为什么选 Matrix"
  },
  "architecture": {
    "en": "Architecture",
    "zh-cn": "系统架构"
  },
  "explore": {
    "en": "Explore the workflow",
    "zh-cn": "探索协作流程"
  },
  "source": {
    "en": "View on GitHub",
    "zh-cn": "在 GitHub 查看"
  },
  "learn": {
    "en": "Explore project",
    "zh-cn": "了解项目"
  },
  "allProjects": {
    "en": "Two applications. One Matrix foundation.",
    "zh-cn": "两个应用，一个 Matrix 基础。"
  },
  "search": {
    "en": "Search",
    "zh-cn": "搜索"
  },
  "searchPlaceholder": {
    "en": "Search projects, guides, and ideas…",
    "zh-cn": "搜索项目、指南和理念…"
  },
  "searchHint": {
    "en": "Find your next step.",
    "zh-cn": "找到你的下一步。"
  },
  "noResults": {
    "en": "No results. Try a project name or “setup”.",
    "zh-cn": "没有找到结果，试试项目名称或“部署”。"
  },
  "close": {
    "en": "Close",
    "zh-cn": "关闭"
  },
  "theme": {
    "en": "Change color theme",
    "zh-cn": "切换明暗主题"
  },
  "menu": {
    "en": "Open navigation",
    "zh-cn": "打开导航"
  },
  "skip": {
    "en": "Skip to content",
    "zh-cn": "跳转到内容"
  },
  "language": {
    "en": "Switch to Chinese",
    "zh-cn": "切换到英文"
  },
  "resources": {
    "en": "Resources",
    "zh-cn": "资源"
  },
  "ecosystemLabel": {
    "en": "The ecosystem",
    "zh-cn": "项目生态"
  },
  "about": {
    "en": "About Hagency",
    "zh-cn": "关于 Hagency"
  },
  "updates": {
    "en": "Updates",
    "zh-cn": "项目动态"
  },
  "roadmap": {
    "en": "Roadmap",
    "zh-cn": "路线图"
  },
  "downloads": {
    "en": "Downloads",
    "zh-cn": "下载"
  },
  "security": {
    "en": "Trust & control",
    "zh-cn": "信任与控制"
  },
  "media": {
    "en": "Brand & media",
    "zh-cn": "品牌与媒体"
  },
  "footer": {
    "en": "Open tools. Shared conversations. Human direction.",
    "zh-cn": "开放工具，共同协作，由人掌舵。"
  },
  "footerNote": {
    "en": "Hagency Desktop and Server build on open-source foundations. Palpo, Pasion, Makepad and Robius retain their own licenses and attribution.",
    "zh-cn": "Hagency Desktop 与 Server 基于开源基础构建，Palpo、Pasion、Makepad 和 Robius 保留各自的许可与署名。"
  },
  "lastVerified": {
    "en": "Source and release snapshot: November 19, 2026",
    "zh-cn": "源码与发布快照：2026 年 11 月 19 日"
  },
  "readGuide": {
    "en": "Read the guide",
    "zh-cn": "阅读指南"
  },
  "readMore": {
    "en": "Read the story",
    "zh-cn": "阅读全文"
  },
  "next": {
    "en": "Next step",
    "zh-cn": "下一步"
  },
  "previous": {
    "en": "Previous",
    "zh-cn": "上一步"
  },
  "replay": {
    "en": "Replay walkthrough",
    "zh-cn": "重新体验"
  },
  "step": {
    "en": "Step",
    "zh-cn": "步骤"
  },
  "walkthrough": {
    "en": "Interactive walkthrough",
    "zh-cn": "交互式流程演示"
  },
  "preview": {
    "en": "Version and verification boundaries",
    "zh-cn": "版本与验证边界"
  },
  "published": {
    "en": "Published release",
    "zh-cn": "已发布版本"
  },
  "copy": {
    "en": "Copy",
    "zh-cn": "复制"
  },
  "copied": {
    "en": "Copied",
    "zh-cn": "已复制"
  },
  "copyFailed": {
    "en": "Select and copy the command manually.",
    "zh-cn": "请选中命令并手动复制。"
  },
  "onThisPage": {
    "en": "On this page",
    "zh-cn": "本页目录"
  },
  "guide": {
    "en": "Integration guide",
    "zh-cn": "集成指南"
  },
  "allGuides": {
    "en": "All guides",
    "zh-cn": "全部指南"
  },
  "related": {
    "en": "Continue exploring",
    "zh-cn": "继续探索"
  },
  "learnTogether": {
    "en": "Build something together.",
    "zh-cn": "一起创造新的可能。"
  },
  "ctaBody": {
    "en": "Start with Desktop and a compatible Hagency Server. Connect a local coding CLI when you are ready to run an Agent.",
    "zh-cn": "从 Desktop 和兼容的 Hagency Server 开始，再连接本地编程 CLI 来运行 Agent。"
  },
  "note": {
    "en": "Good to know",
    "zh-cn": "使用须知"
  },
  "sourceNotes": {
    "en": "Sources & availability",
    "zh-cn": "来源与可用性"
  },
  "download": {
    "en": "Download",
    "zh-cn": "下载"
  },
  "releaseNotes": {
    "en": "Release notes",
    "zh-cn": "版本说明"
  },
  "all": {
    "en": "All platforms",
    "zh-cn": "全部平台"
  },
  "platform": {
    "en": "Your platform",
    "zh-cn": "选择平台"
  },
  "example": {
    "en": "Illustrative workspace",
    "zh-cn": "示例工作空间"
  },
  "demoNote": {
    "en": "An illustrative walkthrough of current roles. It does not run an Agent, authorize tools, or connect to a live account.",
    "zh-cn": "这是当前角色与步骤的示意演练，不运行 Agent、不授予工具权限，也不连接真实账户。"
  },
  "topic": {
    "en": "Explore by topic",
    "zh-cn": "按主题探索"
  },
  "openImage": {
    "en": "Open full image",
    "zh-cn": "查看完整图片"
  },
  "compare": {
    "en": "Compare with Buzz",
    "zh-cn": "对比 Buzz"
  },
  "capabilities": {
    "en": "Verified capabilities",
    "zh-cn": "能力核验"
  }
};

export const home = {
  "eyebrow": {
    "en": "CODING AGENTS, IN YOUR TEAM’S CONVERSATIONS",
    "zh-cn": "让编程 AGENT 加入团队对话"
  },
  "title": {
    "en": "Hagency",
    "zh-cn": "Hagency"
  },
  "subtitle": {
    "en": "Your agents. Your conversations. Your call.",
    "zh-cn": "你的 Agent，你的对话，由你决定。"
  },
  "description": {
    "en": "Bring Codex, Claude Code and Octos into Matrix conversations. Connect your local runtime, set permissions and token limits, and keep progress and results beside the people doing the work.",
    "zh-cn": "让 Codex、Claude Code 和 Octos 进入 Matrix 对话。连接本地运行时，设定权限与 token 限额，让进展和成果留在团队正在协作的地方。"
  },
  "values": [
    {
      "en": "Local execution",
      "zh-cn": "本地执行"
    },
    {
      "en": "Matrix interoperability",
      "zh-cn": "Matrix 互通"
    },
    {
      "en": "Explicit permissions",
      "zh-cn": "明确授权"
    }
  ],
  "scroll": {
    "en": "Discover the ecosystem",
    "zh-cn": "探索项目生态"
  },
  "introLabel": {
    "en": "01 / THE BIG PICTURE",
    "zh-cn": "01 / 全局视角"
  },
  "introTitle": {
    "en": "A native workspace.\nA server you can host.",
    "zh-cn": "原生协作空间，\n可自主托管的服务器。"
  },
  "introBody": {
    "en": "Desktop provides chat, Projects, Agents and the local owner daemon. Server combines Palpo, Pasion sign-in and Agent management in one Rust process. You do not install a separate Fleet or legacy companion console.",
    "zh-cn": "Desktop 提供聊天、Projects、Agents 和本地 owner daemon。Server 在一个 Rust 进程中集成 Palpo、Pasion 登录与 Agent 管理，不再需要独立 Fleet 或旧版配套控制台。"
  },
  "projectsLabel": {
    "en": "02 / MEET THE PROJECTS",
    "zh-cn": "02 / 认识项目"
  },
  "workflowLabel": {
    "en": "03 / FROM CONVERSATION TO RESULT",
    "zh-cn": "03 / 从对话到成果"
  },
  "workflowTitle": {
    "en": "Work happens in the conversation.",
    "zh-cn": "让工作，在对话中发生。"
  },
  "workflowBody": {
    "en": "Create a personal Agent, connect a local runtime, and start in its private chat. Bind a team Room when you need one. Resource-pool requests follow a separate owner-approved flow.",
    "zh-cn": "创建个人 Agent、连接本地运行时，从它的私聊开始；需要团队协作时再绑定房间。共享资源池采用另一条由资源所有者批准的流程。"
  },
  "principlesLabel": {
    "en": "04 / PEOPLE AT THE CENTER",
    "zh-cn": "04 / 以人为中心"
  },
  "principlesTitle": {
    "en": "More capability.\nStill your call.",
    "zh-cn": "能力更强，\n决定权仍在你手中。"
  },
  "principles": [
    {
      "title": {
        "en": "Know what is available",
        "zh-cn": "明确可用范围"
      },
      "body": {
        "en": "See the reviewed source, release assets and test boundaries for each capability. A design document is not a shipped feature.",
        "zh-cn": "逐项查看源码、发布文件与测试范围。设计文档不等于已经交付的功能。"
      },
      "icon": "eye"
    },
    {
      "title": {
        "en": "Grant a specific operation",
        "zh-cn": "只批准具体操作"
      },
      "body": {
        "en": "Room membership, a resource request and permission to run a tool are separate decisions. Follow the operation and scope shown in the approval.",
        "zh-cn": "房间成员资格、资源申请和工具执行权限是不同的决定。请按审批卡片的操作与范围授权。"
      },
      "icon": "shield"
    },
    {
      "title": {
        "en": "Understand where data goes",
        "zh-cn": "看清数据去向"
      },
      "body": {
        "en": "Encrypted content is decrypted by participating devices, including the Agent executor. A resource host and the selected model provider can see the work they process.",
        "zh-cn": "加密内容由参与设备解密，包括 Agent 执行设备。资源主机与所选模型提供方可看到它们处理的内容。"
      },
      "icon": "network"
    }
  ],
  "pathLabel": {
    "en": "05 / YOUR STARTING POINT",
    "zh-cn": "05 / 从这里出发"
  },
  "pathTitle": {
    "en": "Make it yours.",
    "zh-cn": "找到属于你的开始。"
  },
  "updatesLabel": {
    "en": "06 / IN THE OPEN",
    "zh-cn": "06 / 开放进行时"
  },
  "updatesTitle": {
    "en": "Ideas, progress, and what’s next.",
    "zh-cn": "理念、进展与下一步。"
  }
};

export const projects: Project[] = [
  {
    "id": "robrix2",
    "name": "Hagency Desktop",
    "number": "01",
    "color": "blue",
    "role": {
      "en": "THE NATIVE WORKSPACE",
      "zh-cn": "原生协作客户端"
    },
    "headline": {
      "en": "Talk with your team.\nWork with your agents.",
      "zh-cn": "与团队对话，\n与 Agent 协作。"
    },
    "description": {
      "en": "A Rust/Makepad Matrix client with native Projects, Agents, chat and local execution. Choose Codex, Claude Code or Octos; keep model profiles, permissions and usage scoped to the right owner and conversation.",
      "zh-cn": "基于 Rust/Makepad 的 Matrix 客户端，原生集成 Projects、Agents、聊天与本地执行。选择 Codex、Claude Code 或 Octos，让模型配置、权限和用量对应正确的所有者与对话。"
    },
    "short": {
      "en": "Chat, local runtimes and Agent controls.",
      "zh-cn": "聊天、本地运行时与 Agent 控制。"
    },
    "version": "0.5.0-rc.13",
    "date": "2026-11-19",
    "technology": [
      "Rust",
      "Makepad",
      "Matrix",
      "Codex · Claude · Octos"
    ],
    "features": [
      {
        "title": {
          "en": "Start with one private chat",
          "zh-cn": "从一个私聊开始"
        },
        "body": {
          "en": "Create a named personal Agent without creating a Project first. Connect a local runtime and start responding in its owner chat; bind a shared Room later.",
          "zh-cn": "无需先创建 Project，即可创建具名个人 Agent。连接本地运行时后，在所有者私聊中开始响应，再按需绑定共享房间。"
        }
      },
      {
        "title": {
          "en": "Use the real local catalog",
          "zh-cn": "使用真实本地模型目录"
        },
        "body": {
          "en": "Choose a provider-supported model and reasoning setting. Octos selections come from local profiles; profiles with the same model remain separate. Runtime capabilities differ.",
          "zh-cn": "选择提供方支持的模型和推理设置。Octos 选项来自本地配置档，同模型的不同配置保持独立；各运行时能力并不完全相同。"
        }
      },
      {
        "title": {
          "en": "Follow distinct messages",
          "zh-cn": "逐条跟进消息"
        },
        "body": {
          "en": "Progress, supported background reports and final answers can appear as separate Matrix messages. Equal text does not merge distinct source identities. Full post-run reporting remains bounded by provider and routing support.",
          "zh-cn": "进展、受支持的后台报告和最终回答可作为独立 Matrix 消息出现。文本相同不会合并不同来源的消息；运行结束后的完整报告仍受提供方与路由支持范围限制。"
        }
      },
      {
        "title": {
          "en": "Make scoped decisions",
          "zh-cn": "作出有范围的决定"
        },
        "body": {
          "en": "Review requests and tool decisions with their exact owner, Room and operation. Token accounting is postpaid; an admitted task can exceed a configured limit.",
          "zh-cn": "按准确的所有者、房间和操作审阅请求与工具决策。Token 用量在任务后记账，已经接纳的任务可能超过设定限额。"
        }
      }
    ],
    "preview": {
      "en": "rc.13 publishes Apple Silicon macOS and Windows x86-64 installers. Current main is preparing rc.14 and contains later Windows discovery, sign-in and multi-account hosting changes. Linux/Intel/mobile build paths are not rc.13 download assets.",
      "zh-cn": "rc.13 发布了 Apple Silicon macOS 与 Windows x86-64 安装包。当前 main 正准备 rc.14，并包含更晚的 Windows CLI 发现、登录和多账户托管修改；Linux、Intel 与移动端构建路径不等于 rc.13 已发布安装包。"
    },
    "install": "git clone https://github.com/hagency-org/hagency-desktop.git\ncd hagency-desktop\n# Development: reuse the matching pinned JIT runner.\n# See the repository JIT guide; do not compile a native app for testing."
  },
  {
    "id": "hagency",
    "name": "Hagency Server",
    "number": "02",
    "color": "teal",
    "role": {
      "en": "IDENTITY, TRANSPORT AND MANAGEMENT",
      "zh-cn": "身份、传输与管理"
    },
    "headline": {
      "en": "One server.\nClear responsibilities.",
      "zh-cn": "一个服务器，\n职责清晰。"
    },
    "description": {
      "en": "One Rust process integrates Palpo Matrix, Pasion authentication and the management web UI. Its required Agent Appservice handles durable transport while the owner’s computer executes coding work.",
      "zh-cn": "一个 Rust 进程集成 Palpo Matrix、Pasion 认证与管理 Web 界面。必需的 Agent Appservice 负责持久传输，编程任务则在所有者的电脑上执行。"
    },
    "short": {
      "en": "Pasion sign-in, Matrix and Agent management.",
      "zh-cn": "Pasion 登录、Matrix 与 Agent 管理。"
    },
    "version": "source",
    "date": "2026-11-19",
    "technology": [
      "Rust",
      "Palpo",
      "Pasion",
      "PostgreSQL"
    ],
    "features": [
      {
        "title": {
          "en": "Sign in as yourself",
          "zh-cn": "使用自己的身份登录"
        },
        "body": {
          "en": "Pasion OAuth/OIDC with PKCE establishes a personal Matrix identity. An Agent has a permanent owner; an execution lease is not an ownership transfer.",
          "zh-cn": "Pasion OAuth/OIDC 与 PKCE 建立个人 Matrix 身份。Agent 有永久所有者，执行租约不代表转移所有权。"
        }
      },
      {
        "title": {
          "en": "Keep Rooms independent",
          "zh-cn": "保留房间独立性"
        },
        "body": {
          "en": "Projects map to Matrix Spaces. Each Room still checks actual membership and send power; joining a Space does not grant access to all child Rooms.",
          "zh-cn": "Project 对应 Matrix Space。每个房间仍检查真实成员资格与发送权限；加入 Space 不会自动获得全部子房间的访问权。"
        }
      },
      {
        "title": {
          "en": "Ask a resource owner directly",
          "zh-cn": "直接向资源所有者申请"
        },
        "body": {
          "en": "With resource pools enabled, an applicant selects a pool, names an Agent and requests a token ceiling. The owner approves or rejects it; capacity still needs a ready executor.",
          "zh-cn": "启用资源池后，申请人选择资源池、填写 Agent 名称并请求 token 上限。所有者批准或拒绝；获得容量后仍需就绪的执行器。"
        }
      },
      {
        "title": {
          "en": "Retain uncertain work",
          "zh-cn": "保留不确定状态"
        },
        "body": {
          "en": "Durable queues, generation checks, idempotency and recorded receipts support recovery. Unknown work is not automatically billed as zero or replayed as a new model run.",
          "zh-cn": "持久队列、代际检查、幂等标识与回执支持恢复。不确定的工作不会被自动记为零用量，也不会直接重跑为新的模型任务。"
        }
      }
    ],
    "preview": {
      "en": "Use matching current Desktop and Server revisions. Resource-pool behavior depends on management configuration. The latest Server GitHub release has no binary assets; use the documented source/container deployment path. Fleet, Engagement and authority-import instructions are retired.",
      "zh-cn": "使用相互匹配的 Desktop 与 Server 版本。资源池行为取决于管理配置。Server 最新 GitHub release 没有二进制附件，请使用文档中的源码或容器部署路径。Fleet、Engagement 与 authority import 已退役。"
    },
    "install": "git clone https://github.com/hagency-org/hagency-server.git\ncd hagency-server\n# Review the complete deployment guide before generating configuration.\n# One PostgreSQL service holds three separate databases."
  },
  {
    "id": "palpo",
    "name": "Palpo",
    "number": "03",
    "color": "amber",
    "role": {
      "en": "THE MATRIX FOUNDATION",
      "zh-cn": "MATRIX 协议基础"
    },
    "headline": {
      "en": "Open messaging.\nBuilt into the stack.",
      "zh-cn": "开放消息协议，\n集成于协作系统。"
    },
    "description": {
      "en": "The Rust Matrix homeserver underlying Hagency Server. It provides Matrix users, Rooms, Spaces, media and federation APIs. Pasion and Hagency management belong to the integrated Server, not the standalone Palpo archive.",
      "zh-cn": "Hagency Server 底层的 Rust Matrix 服务器，提供用户、房间、Space、媒体和联邦 API。Pasion 与 Hagency 管理由集成 Server 提供，并不属于独立 Palpo 压缩包。"
    },
    "short": {
      "en": "Rooms, devices, events and federation.",
      "zh-cn": "房间、设备、事件与联邦。"
    },
    "version": "0.6.0",
    "date": "2026-11-17",
    "technology": [
      "Rust",
      "Matrix",
      "Salvo",
      "PostgreSQL"
    ],
    "features": [
      {
        "title": {
          "en": "Use open Matrix primitives",
          "zh-cn": "使用开放 Matrix 基础能力"
        },
        "body": {
          "en": "Users, devices, Rooms, Spaces and standard events keep the communication layer inspectable and interoperable. Client-specific extensions still need compatible clients.",
          "zh-cn": "用户、设备、房间、Space 与标准事件让通信层可检查、可互通；客户端扩展仍需要兼容的客户端。"
        }
      },
      {
        "title": {
          "en": "Support device encryption",
          "zh-cn": "支持设备端加密"
        },
        "body": {
          "en": "Matrix key upload, query, claims and to-device transport support SDK-based encryption. A device identity and possession of a specific room key are separate facts.",
          "zh-cn": "Matrix 密钥上传、查询、领取与 to-device 传输支持基于 SDK 的加密。具备设备身份与持有特定房间密钥，是两件不同的事。"
        }
      },
      {
        "title": {
          "en": "Connect through federation",
          "zh-cn": "通过联邦连接"
        },
        "body": {
          "en": "Federation is a protocol capability, not a guarantee that every deployment, room setting or Agent extension has been tested across servers.",
          "zh-cn": "联邦是一项协议能力，并不保证每种部署、房间设置或 Agent 扩展都已经跨服务器实测。"
        }
      },
      {
        "title": {
          "en": "Choose the right deployment",
          "zh-cn": "选择正确的部署方式"
        },
        "body": {
          "en": "Most Hagency users connect to the integrated Server. Standalone Palpo is a separate operator path and does not install coding agents or the Hagency owner daemon.",
          "zh-cn": "大多数 Hagency 用户连接集成 Server。独立 Palpo 是另一条运维路径，不会安装编程 Agent 或 Hagency owner daemon。"
        }
      }
    ],
    "preview": {
      "en": "Palpo v0.6.0 publishes macOS ARM64, Linux x86-64 and Windows x86-64 archives. Hagency Server pins a specific Palpo source revision; that revision is a different baseline from this standalone release.",
      "zh-cn": "Palpo v0.6.0 提供 macOS ARM64、Linux x86-64 与 Windows x86-64 压缩包。Hagency Server 固定使用特定 Palpo 源码版本，与独立发行版是不同基线。"
    },
    "install": "# For the complete Hagency stack, follow Hagency Server deployment.\n# For standalone Matrix, review Palpo’s own requirements.\ngit clone https://github.com/palpo-im/palpo.git"
  }
];

export const paths = [
  {
    "id": "client",
    "icon": "chat",
    "title": {
      "en": "Use an Agent",
      "zh-cn": "使用 Agent"
    },
    "description": {
      "en": "Download Desktop, sign in to a compatible server, then create your first personal Agent.",
      "zh-cn": "下载 Desktop，登录兼容服务器，再创建第一个个人 Agent。"
    },
    "href": "docs/install-robrix2",
    "label": {
      "en": "Start with Desktop",
      "zh-cn": "从 Desktop 开始"
    }
  },
  {
    "id": "agents",
    "icon": "fleet",
    "title": {
      "en": "Share approved capacity",
      "zh-cn": "共享经批准的容量"
    },
    "description": {
      "en": "Connect a local runtime, define what you offer and review resource-pool requests as the owner.",
      "zh-cn": "连接本地运行时，明确可提供的资源，并以所有者身份审阅资源池申请。"
    },
    "href": "docs/resource-pools",
    "label": {
      "en": "Read the resource-owner path",
      "zh-cn": "查看资源所有者流程"
    }
  },
  {
    "id": "server",
    "icon": "network",
    "title": {
      "en": "Host your team",
      "zh-cn": "托管团队服务"
    },
    "description": {
      "en": "Deploy the integrated Server with Pasion, Palpo and three separate databases.",
      "zh-cn": "部署集成 Server，包含 Pasion、Palpo 与三个独立数据库。"
    },
    "href": "docs/deploy-palpo",
    "label": {
      "en": "Read the operator guide",
      "zh-cn": "查看运维指南"
    }
  }
];

export const faqs = [
  {
    "title": {
      "en": "Do I install three applications?",
      "zh-cn": "需要安装三个应用吗？"
    },
    "body": {
      "en": "A member installs Desktop and connects to a compatible Hagency Server. The operator hosts Server, which already integrates Palpo and Pasion. A local coding CLI is needed on the computer that executes the Agent.",
      "zh-cn": "成员安装 Desktop 并连接兼容的 Hagency Server；运维者托管已经集成 Palpo 与 Pasion 的 Server。实际执行 Agent 的电脑还需要本地编程 CLI。"
    }
  },
  {
    "title": {
      "en": "Can I use Element or another Matrix server?",
      "zh-cn": "可以使用 Element 或其他 Matrix 服务器吗？"
    },
    "body": {
      "en": "Ordinary messages use Matrix events. Hagency management requires the matching Server APIs, and interactive approval controls require a compatible client. Element end-to-end approval/report interoperability has not been verified by this audit.",
      "zh-cn": "普通消息使用 Matrix 事件。Hagency 管理需要匹配的 Server API，交互式审批需要兼容客户端；本次审核没有验证 Element 的端到端审批或报告互通。"
    }
  },
  {
    "title": {
      "en": "Does a token limit stop a running task?",
      "zh-cn": "Token 限额会中断正在运行的任务吗？"
    },
    "body": {
      "en": "Accounting is postpaid. A task admitted within policy may exceed its limit and continues until completion or explicit stop. Unknown usage and holds remain unresolved rather than becoming zero. This is not a billing or payment service.",
      "zh-cn": "用量在任务后记账。按策略接纳的任务可能超出限额，并持续到完成或明确停止。不确定用量与预留保持待确认，不会变成零；这不是计费或支付服务。"
    }
  },
  {
    "title": {
      "en": "Is Hagency better than Buzz?",
      "zh-cn": "Hagency 比 Buzz 更好吗？"
    },
    "body": {
      "en": "Compare the workflow you need. Hagency focuses on Matrix, local runtime control and owner-approved capacity. Buzz documents broader workflow, Git and canvas tools. The comparison separates source evidence from executed tests and does not claim an unmeasured overall winner.",
      "zh-cn": "请按实际工作流程比较。Hagency 聚焦 Matrix、本地运行控制与所有者批准的容量；Buzz 文档提供更广的工作流、Git 与画布工具。对比页区分源码证据和已执行测试，不宣称未经测量的全面胜出。"
    }
  }
];
