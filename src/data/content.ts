import { type Text } from './site';
export type Section = {title:Text; paragraphs:Text[]; bullets?:Text[]; code?:string; link?:{label:Text;href:string}};
export type Article = {slug:string;title:Text;description:Text;category:Text;sections:Section[];source?:string;date?:string};

export const guides: Article[] = [
  {
    "slug": "choose-your-path",
    "title": {
      "en": "Choose your first useful step",
      "zh-cn": "选择第一个实际步骤"
    },
    "description": {
      "en": "Start with a personal Agent; hosting and resource sharing are separate paths.",
      "zh-cn": "从个人 Agent 开始；托管服务器与共享资源是另外两条路径。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Use Desktop, connect to Server",
          "zh-cn": "使用 Desktop，连接 Server"
        },
        "paragraphs": [
          {
            "en": "Install Hagency Desktop and sign in to a compatible Hagency Server through Pasion. Server already integrates Palpo, Pasion and Agent management. Members do not create a Fleet or install a separate companion admin.",
            "zh-cn": "安装 Hagency Desktop，通过 Pasion 登录兼容的 Hagency Server。Server 已集成 Palpo、Pasion 与 Agent 管理；成员无需创建 Fleet 或安装独立配套管理界面。"
          },
          {
            "en": "Generic Matrix chat and Hagency Agent management have different requirements. A generic Matrix server alone does not provide the Hagency management APIs.",
            "zh-cn": "普通 Matrix 聊天与 Hagency Agent 管理有不同要求；单独的通用 Matrix 服务器不会提供 Hagency 管理 API。"
          }
        ]
      },
      {
        "title": {
          "en": "Choose your role",
          "zh-cn": "选择自己的角色"
        },
        "paragraphs": [
          {
            "en": "For your own work, create a personal Agent and connect a local CLI. To contribute capacity, follow the resource-owner guide. To operate the service, follow Server deployment. A personal Agent does not require a Project first.",
            "zh-cn": "为自己的工作创建个人 Agent 并连接本地 CLI；贡献容量请看资源所有者指南，运维服务请看 Server 部署指南。个人 Agent 无需先创建 Project。"
          }
        ]
      },
      {
        "title": {
          "en": "Check the version boundary",
          "zh-cn": "确认版本边界"
        },
        "paragraphs": [
          {
            "en": "Desktop rc.14 is available for macOS ARM64 and Windows x86-64. Choose your installer from Downloads and follow the corresponding release notes for setup and dependencies.",
            "zh-cn": "Desktop rc.14 提供 macOS ARM64 与 Windows x86-64 安装包。在下载页选择对应版本，按版本说明完成配置并安装依赖。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "install-robrix2",
    "title": {
      "en": "Install Hagency Desktop",
      "zh-cn": "安装 Hagency Desktop"
    },
    "description": {
      "en": "Download an actual release asset and enter the current native workspace.",
      "zh-cn": "下载实际发布的安装包，进入当前原生协作客户端。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Choose an available installer",
          "zh-cn": "选择确实可用的安装包"
        },
        "paragraphs": [
          {
            "en": "Download the macOS ARM64 DMG or the Windows x86-64 installer. Each release includes checksums and build information.",
            "zh-cn": "rc.14 包含 macOS ARM64 DMG、Windows x86-64 安装程序，以及校验和与构建清单；此版本没有列出 Linux、Intel macOS、Android 或 iOS 安装包。构建成功不等于已提供下载文件。"
          },
          {
            "en": "Desktop rc.14 includes local Codex discovery and browser sign-in improvements. Follow the prerequisites for your operating system and runtime.",
            "zh-cn": "Desktop rc.14 包含本地 Codex 发现与浏览器登录改进，请按所用操作系统和运行时完成依赖配置。"
          }
        ]
      },
      {
        "title": {
          "en": "Sign in through Pasion",
          "zh-cn": "通过 Pasion 登录"
        },
        "paragraphs": [
          {
            "en": "Enter your Hagency Server origin, continue to browser sign-in, and return through the OAuth callback. Keep the same account and device data when updating if you need encrypted history. Device verification alone does not restore missing room keys.",
            "zh-cn": "输入 Hagency Server 地址，继续到浏览器登录并经 OAuth 回调返回。更新时如需访问加密历史，请保留同一账户及设备数据；仅验证设备并不能恢复缺失的房间密钥。"
          }
        ]
      },
      {
        "title": {
          "en": "Develop from source",
          "zh-cn": "从源码开始开发"
        },
        "paragraphs": [
          {
            "en": "Clone the Desktop repository and follow its README for the Makepad runtime, dependencies and local setup. Published installers are available from Downloads.",
            "zh-cn": "克隆 Desktop 仓库，按照 README 配置 Makepad 运行环境、依赖与本地开发设置。已发布安装包见下载页。"
          }
        ],
        "code": "git clone https://github.com/hagency-org/hagency-desktop.git\ncd hagency-desktop\n# See README.md for development setup."
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop"
  },
  {
    "slug": "run-hagency",
    "title": {
      "en": "Connect a local coding runtime",
      "zh-cn": "连接本地编程运行时"
    },
    "description": {
      "en": "Connect a local Codex, Claude Code or Octos configuration to your Agent.",
      "zh-cn": "为 Agent 连接本地 Codex、Claude Code 或 Octos 配置。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Use the existing provider account",
          "zh-cn": "使用现有提供方账户"
        },
        "paragraphs": [
          {
            "en": "In the Agent’s model/runtime settings, select a supported local runtime. Codex and Claude Code can use supported existing local sign-ins. Octos uses the selected local profile, including its model and reasoning settings. Credentials stay with the provider app.",
            "zh-cn": "在 Agent 的模型／运行时设置中选择受支持的本地运行时。Codex 与 Claude Code 可使用受支持的现有本地登录；Octos 使用选定的本地配置档及其模型、推理设置。凭据保留在提供方应用中。"
          }
        ]
      },
      {
        "title": {
          "en": "Select from the actual catalog",
          "zh-cn": "从真实目录中选择"
        },
        "paragraphs": [
          {
            "en": "Choose from the models and profiles supplied by the installed runtime. Octos keeps separate profiles for the same model and supports local models and custom endpoints through profile configuration.",
            "zh-cn": "从已安装运行时提供的模型与配置中选择。Octos 为同一模型保留独立配置，并通过配置连接本地模型和自定义端点。"
          }
        ]
      },
      {
        "title": {
          "en": "Save and start your Agent",
          "zh-cn": "保存配置并启动 Agent"
        },
        "paragraphs": [
          {
            "en": "Save the runtime, model and workspace settings. Open the Agent’s Service page, start its service and open the private conversation to send your first request.",
            "zh-cn": "保存运行时、模型和工作区设置。打开 Agent 的 Service 页面，启动服务，再打开私密对话发送第一个请求。"
          },
          {
            "en": "For team work, bind the Agent to the intended room and mention it in your request. Review permissions and usage settings for that conversation before starting work.",
            "zh-cn": "团队协作时，将 Agent 绑定到目标房间，并在请求中明确提及它。开始工作前，查看该对话的权限与用量设置。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "deploy-palpo",
    "title": {
      "en": "Deploy Hagency Server",
      "zh-cn": "部署 Hagency Server"
    },
    "description": {
      "en": "Host the integrated Rust server; standalone Palpo is a different installation.",
      "zh-cn": "托管集成 Rust 服务器；独立 Palpo 是另一种安装方式。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "One process, three databases",
          "zh-cn": "一个进程，三个数据库"
        },
        "paragraphs": [
          {
            "en": "Hagency Server embeds Palpo, Pasion authentication and the management web UI. One PostgreSQL service holds separate Hagency, Palpo and Pasion databases. The integrated Agent Appservice is required; users do not register one service per Fleet.",
            "zh-cn": "Hagency Server 内嵌 Palpo、Pasion 认证与管理 Web 界面。一个 PostgreSQL 服务承载独立的 Hagency、Palpo、Pasion 数据库。集成 Agent Appservice 是必需组件；用户不会按 Fleet 逐个注册服务。"
          }
        ]
      },
      {
        "title": {
          "en": "Follow the complete operator guide",
          "zh-cn": "遵循完整运维指南"
        },
        "paragraphs": [
          {
            "en": "Prepare the documented toolchain, database, Pasion resources and frontend assets. Generate configuration for your own origin and server name. Create the bootstrap administrator through a protected password file, then run behind the documented TLS proxy.",
            "zh-cn": "准备文档指定的工具链、数据库、Pasion 资源与前端文件。按自己的公开地址及服务器名称生成配置，通过受保护密码文件建立首位管理员，再按文档配置 TLS 代理。"
          },
          {
            "en": "The latest Server release entry has no binary assets. Do not substitute an obsolete Node installer, Fleet callback setup or a standalone Palpo archive for the integrated server.",
            "zh-cn": "Server 最新 release 条目没有二进制附件；不要用旧 Node 安装器、Fleet 回调配置或独立 Palpo 压缩包代替集成服务器。"
          }
        ],
        "code": "git clone https://github.com/hagency-org/hagency-server.git\ncd hagency-server\n# Review README.md and docs/guide.md first.\njust init-docker --origin https://matrix.example.org --server-name matrix.example.org"
      },
      {
        "title": {
          "en": "Enable only the features you intend",
          "zh-cn": "只启用确实需要的能力"
        },
        "paragraphs": [
          {
            "en": "Management and resource-pool behavior have separate configuration gates. HAGENCY_ENABLE_RESOURCE_POOLS enables defaults for the relevant pool/admission settings; explicit TOML settings take precedence. Use matching Desktop, daemon and Server versions and read forward-only migration notes.",
            "zh-cn": "管理与资源池行为有各自的配置开关。HAGENCY_ENABLE_RESOURCE_POOLS 会启用相关资源池、准入设置的默认值，显式 TOML 设置优先。请使用匹配的 Desktop、daemon 与 Server，并阅读只前进迁移说明。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-server/blob/main/docs/guide.md"
  },
  {
    "slug": "connect-fleet",
    "title": {
      "en": "Connect your account and device",
      "zh-cn": "连接账户与设备"
    },
    "description": {
      "en": "The current flow uses Pasion and native ownership, not a Fleet configuration file.",
      "zh-cn": "当前流程使用 Pasion 与原生所有权，不使用 Fleet 配置文件。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Use your own Matrix identity",
          "zh-cn": "使用自己的 Matrix 身份"
        },
        "paragraphs": [
          {
            "en": "Sign in with Pasion. The SDK owns OAuth login, refresh and logout; Hagency management checks the corresponding Matrix account. A body field or an Agent display name cannot establish ownership.",
            "zh-cn": "使用 Pasion 登录。SDK 负责 OAuth 登录、刷新与退出，Hagency 管理检查对应的 Matrix 账户；请求字段或 Agent 显示名称不能建立所有权。"
          }
        ]
      },
      {
        "title": {
          "en": "Keep account and execution distinct",
          "zh-cn": "区分账户与执行设备"
        },
        "paragraphs": [
          {
            "en": "An Agent has a permanent owner. Desktop rc.14 keeps separate enrollment and runtime state for each account in background hosting. Device assignment controls where its work executes.",
            "zh-cn": "Agent 拥有永久所有者。Desktop rc.14 在后台托管中为各账户保留独立注册与运行状态，由设备分配决定任务的执行位置。"
          }
        ]
      },
      {
        "title": {
          "en": "Keep your account and work history",
          "zh-cn": "保留账户与工作记录"
        },
        "paragraphs": [
          {
            "en": "Use the original account/device and documented recovery controls. Unknown work, unresolved usage and old device generations must not be reset into new execution. The legacy Fleet URL is retained as a bookmark only; its installation and authority-import workflow are retired.",
            "zh-cn": "使用原账户、设备及文档指定的恢复控制。不确定工作、未结算用量与旧设备代际不能被重置成新执行。本页保留旧 Fleet URL 仅为兼容书签，其安装与 authority import 流程已退役。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "request-agent",
    "title": {
      "en": "Create your first Agent",
      "zh-cn": "创建第一个 Agent"
    },
    "description": {
      "en": "A personal Agent starts in a private chat; shared capacity uses a separate request.",
      "zh-cn": "个人 Agent 从私聊开始，共享容量走独立申请流程。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Create an identity",
          "zh-cn": "创建身份"
        },
        "paragraphs": [
          {
            "en": "Open Agent → Agent manager → My Agents. For a local Agent, this computer must first host the current account: check Hosting in the panel header. Once Local Agents is available, choose Add Local Agent and complete the native creation form. A Project is not required. Wait for the owner private chat to be ready.",
            "zh-cn": "打开 Agent → Agent 管理者 → 我的 Agent。本地 Agent 需要本机先托管当前账户，请检查面板顶部 Hosting／资源托管。出现本地 Agent 区域后，选择添加本地 Agent 并完成原生创建表单，无需预先创建 Project。等待所有者私聊就绪。"
          }
        ]
      },
      {
        "title": {
          "en": "Connect and start",
          "zh-cn": "连接并启动"
        },
        "paragraphs": [
          {
            "en": "Open the Agent’s model/runtime settings and select a supported local configuration. Save its actual model choice, review usage and permissions, then enable its service and open the private conversation. A configured CLI and an active model account are prerequisites.",
            "zh-cn": "打开 Agent 的模型／运行时设置，选择受支持的本地配置并保存实际模型选项；检查用量与权限后，启用服务并打开私密对话。需要已配置的 CLI 和可用的模型账户。"
          }
        ]
      },
      {
        "title": {
          "en": "Invite it into a team Room",
          "zh-cn": "邀请进入团队房间"
        },
        "paragraphs": [
          {
            "en": "Bind the Agent to the intended Project/Room with actual membership and permissions. Use an explicit mention in shared-room requests, including thread follow-ups. Requesting another owner’s resource pool is a separate owner-approved operation.",
            "zh-cn": "按真实成员资格与权限，把 Agent 绑定至目标 Project/Room。共享房间中的请求应明确提及 Agent，包括线程后续请求。申请其他所有者的资源池是另一项需要其批准的操作。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "resource-pools",
    "title": {
      "en": "Request or contribute a resource pool",
      "zh-cn": "申请或贡献资源池"
    },
    "description": {
      "en": "Keep applicant intent, resource-owner approval and runtime readiness separate.",
      "zh-cn": "区分申请意图、资源所有者批准与运行时就绪。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "For the applicant",
          "zh-cn": "申请人流程"
        },
        "paragraphs": [
          {
            "en": "When pools are enabled, open Agent → Agent manager → Browse resource pools, choose a pool, name the Agent and request a positive token ceiling. Requests and detail views show the decision state. Duplicate retries retain the original request identity.",
            "zh-cn": "启用资源池后，打开 Agent → Agent 管理者 → 浏览资源池，选择资源池、填写 Agent 名称并请求正数 token 上限。申请列表与详情显示决策状态；重复重试保留原申请身份。"
          }
        ]
      },
      {
        "title": {
          "en": "For the resource owner",
          "zh-cn": "资源所有者流程"
        },
        "paragraphs": [
          {
            "en": "A resource owner publishes eligible capacity and reviews their own requests. Approval creates the Agent and its grant; rejection has a visible reason. Existing local runtime profiles and the executor must qualify before work begins.",
            "zh-cn": "资源所有者发布符合条件的容量，并审阅归属自己的申请。批准后创建 Agent 及授权，拒绝则保留可见原因；本地运行时配置与执行器通过资格检查后才能开始工作。"
          }
        ]
      },
      {
        "title": {
          "en": "Understand what a ceiling means",
          "zh-cn": "理解上限的实际含义"
        },
        "paragraphs": [
          {
            "en": "Each Agent uses one pool. After approval, the executor reserves capacity and settles actual usage after the task. Admitted work may exceed its token limit; unresolved usage stays in the ledger. Applicants can remove their Agent, and resource owners can stop supply.",
            "zh-cn": "每个 Agent 使用一个资源池。申请批准后，由执行器预留容量并在任务后按实际用量结算。已接纳工作可能超过 token 上限，待确认用量保留在账本中。申请人可移除自己的 Agent，资源所有者可停止供给。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-server/blob/main/docs/OPERATIONS.md"
  },
  {
    "slug": "task-threads",
    "title": {
      "en": "Chat, progress and conversation scope",
      "zh-cn": "聊天、进展与会话范围"
    },
    "description": {
      "en": "Keep the right requester, Room and thread attached to every turn.",
      "zh-cn": "让每一轮都关联正确的请求人、房间与线程。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Choose the right context",
          "zh-cn": "选择正确上下文"
        },
        "paragraphs": [
          {
            "en": "Owner private chats do not require mentions. Use an explicit mention for shared-room requests, including thread follow-ups. Different Rooms and top-level group threads keep independent provider contexts; a display-name match is not routing authority.",
            "zh-cn": "所有者私聊无需提及；共享房间中的请求应明确提及，包括线程后续请求。不同房间及群聊顶层线程保持独立提供方上下文，显示名称相同不代表路由授权。"
          }
        ]
      },
      {
        "title": {
          "en": "Read distinct messages",
          "zh-cn": "逐条阅读独立消息"
        },
        "paragraphs": [
          {
            "en": "Progress updates, supported background messages and final answers appear as separate Matrix messages. Distinct source messages stay separate even when their text matches. Delivery retries keep the original message identity.",
            "zh-cn": "进展更新、受支持的后台消息和最终回答分别呈现为独立 Matrix 消息。不同来源的消息即使文本相同也会保留，重复投递沿用原消息标识。"
          }
        ]
      },
      {
        "title": {
          "en": "Wait for the sender SDK’s keys",
          "zh-cn": "等待发送方 SDK 的密钥就绪"
        },
        "paragraphs": [
          {
            "en": "A server-side keys query is not enough: the sending SDK must discover and verify the recipient device before encrypting. Desktop uses that readiness guard. Delayed room keys, device verification and history recovery are different conditions.",
            "zh-cn": "只查询服务端密钥还不够：发送方 SDK 必须在加密前发现并验证接收设备。Desktop 使用该就绪检查。房间密钥延迟、设备验证与历史恢复是不同的条件。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/agent-chat.md"
  },
  {
    "slug": "approvals",
    "title": {
      "en": "Permissions and human decisions",
      "zh-cn": "权限与人工决策"
    },
    "description": {
      "en": "Review the operation, scope and decision maker rather than replying “yes” in chat.",
      "zh-cn": "按操作、范围和决策者审阅权限，而不是在聊天里回复“同意”。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Different decisions grant different things",
          "zh-cn": "不同决策授予不同权限"
        },
        "paragraphs": [
          {
            "en": "Room membership is not tool authorization. A resource-pool approval is not permission for every command. The local Agent, Room and requester policies still apply; denial at a layer blocks the operation.",
            "zh-cn": "房间成员资格不等于工具授权，资源池批准也不代表所有命令都获准。Agent、房间与请求人的本地策略仍然有效，任一层拒绝都会阻止操作。"
          }
        ]
      },
      {
        "title": {
          "en": "Use the supported approval control",
          "zh-cn": "使用受支持的审批控制"
        },
        "paragraphs": [
          {
            "en": "Read the requested tool and exact scope in the supported owner approval surface. Ordinary message text is not a structured decision. Conversational question or run-control cards do not grant tool approval authority.",
            "zh-cn": "在受支持的所有者审批界面中阅读工具与准确范围。普通聊天文字不是结构化决策，交互问题或运行控制卡片也不会授予工具审批权限。"
          }
        ]
      },
      {
        "title": {
          "en": "Respect runtime and host limits",
          "zh-cn": "遵守运行时与主机限制"
        },
        "paragraphs": [
          {
            "en": "Configure tool permissions and filesystem access for the chosen runtime and platform. Permission changes govern subsequent operations; completed tool actions remain in the work history.",
            "zh-cn": "针对所选运行时和平台配置工具权限与文件访问。权限变更管理后续操作，已完成的工具操作保留在工作记录中。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "share-files",
    "title": {
      "en": "Exchange files in the admitted Room",
      "zh-cn": "在获准房间中交换文件"
    },
    "description": {
      "en": "Keep file delivery scoped, encrypted where required and within transfer bounds.",
      "zh-cn": "让文件交付受范围约束，按需加密，并遵循传输边界。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Use the correct Room",
          "zh-cn": "使用正确房间"
        },
        "paragraphs": [
          {
            "en": "Attach inputs and publish outputs within the admitted conversation. The native Matrix file bridge is documented for Codex and Claude; do not assume the same bridge exists for every Octos or external adapter.",
            "zh-cn": "在获准对话中发送输入与发布输出。原生 Matrix 文件桥接明确用于 Codex 与 Claude，不应假设每个 Octos 或外部适配器都具有同样桥接。"
          }
        ]
      },
      {
        "title": {
          "en": "Know the limits",
          "zh-cn": "了解限制"
        },
        "paragraphs": [
          {
            "en": "Shared Matrix file publication permits up to 64 files and 64 MiB per request. A transfer-limit error leaves the task running. Exact retries preserve the original delivery receipt; an owner-local path is not a delivered attachment.",
            "zh-cn": "共享 Matrix 文件发布每次请求最多 64 个文件、64 MiB。触及传输上限会返回工具错误，任务仍继续运行；准确重试保留原交付回执，所有者本地路径不等于已交付附件。"
          }
        ]
      },
      {
        "title": {
          "en": "Understand the privacy boundary",
          "zh-cn": "理解隐私边界"
        },
        "paragraphs": [
          {
            "en": "The Agent executor must decrypt encrypted inputs to process them. The selected model provider may receive their content. Matrix encryption protects transport between participant devices; it does not make every selected model local.",
            "zh-cn": "Agent 执行器必须解密加密输入才能处理，所选模型提供方也可能接收内容。Matrix 加密保护参与设备之间的通信，并不会让所有模型都在本地运行。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/hagency-quickstart.md"
  },
  {
    "slug": "operations",
    "title": {
      "en": "Operate and recover the current stack",
      "zh-cn": "运维与恢复当前系统"
    },
    "description": {
      "en": "Separate health, authorization, durable recovery and actual model execution.",
      "zh-cn": "区分健康状态、授权、持久恢复与真实模型执行。"
    },
    "category": {
      "en": "CURRENT GUIDE",
      "zh-cn": "当前指南"
    },
    "sections": [
      {
        "title": {
          "en": "Observe the right component",
          "zh-cn": "观察正确组件"
        },
        "paragraphs": [
          {
            "en": "Use Server health to monitor Matrix transport and the integrated Appservice. In Desktop, check the owner daemon, selected runtime profile, workspace and provider sign-in to manage Agent execution.",
            "zh-cn": "通过 Server 健康状态监控 Matrix 传输与集成 Appservice；在 Desktop 中检查所有者守护进程、所选运行时配置、工作区与提供方登录，管理 Agent 执行。"
          }
        ]
      },
      {
        "title": {
          "en": "Recover original work",
          "zh-cn": "恢复原工作"
        },
        "paragraphs": [
          {
            "en": "Keep receipts, source IDs, binding generations and usage records. Reconnect using the original operation and resolve pending usage against its execution record.",
            "zh-cn": "保留回执、来源 ID、绑定代际与用量记录，使用原操作重连，并根据对应执行记录确认待结算用量。"
          }
        ]
      },
      {
        "title": {
          "en": "Manage deployment versions",
          "zh-cn": "管理部署版本"
        },
        "paragraphs": [
          {
            "en": "Keep Desktop, Server, Palpo, Pasion and runtime versions in your deployment record. Follow the corresponding release and upgrade instructions, and back up account data, room keys and execution records before an upgrade.",
            "zh-cn": "记录部署使用的 Desktop、Server、Palpo、Pasion 与运行时版本，遵循对应的发布和升级说明；升级前备份账户数据、房间密钥及执行记录。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-server/blob/main/docs/OPERATIONS.md"
  }
];

export const articles: Article[] = [
  {
    "slug": "introducing-hagency",
    "title": {
      "en": "Desktop and Server, built to work together",
      "zh-cn": "Desktop 与 Server，共同连接协作"
    },
    "description": {
      "en": "Desktop owns the workspace and local execution; Server integrates identity and Matrix.",
      "zh-cn": "Desktop 负责协作界面与本地执行，Server 集成身份和 Matrix。"
    },
    "category": {
      "en": "PRODUCT UPDATE",
      "zh-cn": "产品动态"
    },
    "sections": [
      {
        "title": {
          "en": "A workspace and its services",
          "zh-cn": "工作空间与配套服务"
        },
        "paragraphs": [
          {
            "en": "Use Hagency Desktop to chat, manage Agents and connect local coding runtimes. Hagency Server combines Palpo Matrix, Pasion sign-in and Agent management in one Rust service.",
            "zh-cn": "通过 Hagency Desktop 聊天、管理 Agent 并接入本地编程运行时。Hagency Server 在一个 Rust 服务中集成 Palpo Matrix、Pasion 登录与 Agent 管理。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop",
    "date": "2026-11-19"
  },
  {
    "slug": "conversation-to-result",
    "title": {
      "en": "Keep Agent progress in the conversation",
      "zh-cn": "让 Agent 进展留在对话中"
    },
    "description": {
      "en": "Follow updates and answers as separate messages in your Agent conversation.",
      "zh-cn": "在 Agent 对话中逐条跟进进展更新和最终回答。"
    },
    "category": {
      "en": "PRODUCT UPDATE",
      "zh-cn": "产品动态"
    },
    "sections": [
      {
        "title": {
          "en": "See each update clearly",
          "zh-cn": "逐条查看进展"
        },
        "paragraphs": [
          {
            "en": "Hagency presents Agent progress, supported background messages and final answers as individual Matrix messages. Follow the work step by step, with updates and results kept in the same conversation.",
            "zh-cn": "Hagency 将 Agent 进展、受支持的后台消息与最终回答呈现为独立 Matrix 消息。逐条跟进工作，在同一对话中查看更新与成果。"
          }
        ]
      },
      {
        "title": {
          "en": "Keep the conversation in context",
          "zh-cn": "保留对话上下文"
        },
        "paragraphs": [
          {
            "en": "Private conversations and shared-room threads keep their own task context. Members follow the work in the same room, while tool permissions remain under the Agent owner’s control.",
            "zh-cn": "私密对话和共享房间线程各自保留任务上下文。成员在同一个房间跟进工作，工具权限仍由 Agent 所有者管理。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/agent-chat.md",
    "date": "2026-11-19"
  },
  {
    "slug": "why-matrix",
    "title": {
      "en": "Build collaboration on Matrix",
      "zh-cn": "基于 Matrix 构建协作"
    },
    "description": {
      "en": "Open identities, rooms and federation connect people with their Agents.",
      "zh-cn": "通过开放的身份、房间与联邦，连接人与 Agent。"
    },
    "category": {
      "en": "PRODUCT UPDATE",
      "zh-cn": "产品动态"
    },
    "sections": [
      {
        "title": {
          "en": "Conversations on an open network",
          "zh-cn": "开放网络中的对话"
        },
        "paragraphs": [
          {
            "en": "Matrix provides user identities, rooms, device encryption and federation. Hagency connects those conversations to local coding runtimes, resource pools and owner-controlled permissions. Teams can host their own Server and collaborate through standard Matrix room messages.",
            "zh-cn": "Matrix 提供用户身份、房间、设备加密和联邦。Hagency 将对话连接至本地编程运行时、资源池与所有者权限。团队可以托管自己的 Server，通过标准 Matrix 房间消息开展协作。"
          }
        ]
      }
    ],
    "source": "https://spec.matrix.org/latest/",
    "date": "2026-11-19"
  }
];

export const pageInfo = {
  "architecture": {
    "title": {
      "en": "Current architecture, clearly connected.",
      "zh-cn": "看清当前系统架构。"
    },
    "description": {
      "en": "Desktop, owner daemon, Server, Palpo, Pasion and the actual runtime protocols.",
      "zh-cn": "Desktop、owner daemon、Server、Palpo、Pasion 与真实运行时协议。"
    }
  },
  "": {
    "title": {
      "en": "Your coding agents, in the conversation.",
      "zh-cn": "让编程 Agent 进入团队对话。"
    },
    "description": {
      "en": "A native Matrix workspace and a self-hostable Rust server for human-directed Agent work.",
      "zh-cn": "原生 Matrix 协作空间与可自主托管的 Rust 服务器，由人掌握 Agent 工作方向。"
    }
  },
  "ecosystem": {
    "title": {
      "en": "Desktop. Server. Open foundations.",
      "zh-cn": "Desktop、Server 与开放基础。"
    },
    "description": {
      "en": "Understand the current component boundaries before installing.",
      "zh-cn": "安装前先理解当前组件边界。"
    }
  },
  "matrix": {
    "title": {
      "en": "Open conversations, explicit permissions.",
      "zh-cn": "开放对话，明确权限。"
    },
    "description": {
      "en": "Matrix identities, room roles, encryption and federation with their actual boundaries.",
      "zh-cn": "Matrix 身份、房间角色、加密与联邦，以及它们的实际边界。"
    }
  },
  "demo": {
    "title": {
      "en": "Try the first-Agent walkthrough.",
      "zh-cn": "体验首个 Agent 流程。"
    },
    "description": {
      "en": "Explore the steps from connecting a runtime to working with an Agent.",
      "zh-cn": "了解从接入运行时到与 Agent 协作的各个步骤。"
    }
  },
  "use-cases": {
    "title": {
      "en": "Put your Agents to work.",
      "zh-cn": "让 Agent 参与实际工作。"
    },
    "description": {
      "en": "Personal coding, team conversations and owner-approved resource sharing.",
      "zh-cn": "个人编程、团队对话与所有者批准的资源共享。"
    }
  },
  "get-started": {
    "title": {
      "en": "One useful first conversation.",
      "zh-cn": "从一段有用的对话开始。"
    },
    "description": {
      "en": "Install Desktop, sign in, connect a local runtime and start a personal Agent.",
      "zh-cn": "安装 Desktop、登录、连接本地运行时并启动个人 Agent。"
    }
  },
  "downloads": {
    "title": {
      "en": "Download Hagency Desktop.",
      "zh-cn": "下载 Hagency Desktop。"
    },
    "description": {
      "en": "Desktop installers, server deployment and platform information.",
      "zh-cn": "Desktop 安装包、服务器部署及平台信息。"
    }
  },
  "docs": {
    "title": {
      "en": "Current guides. Clear next steps.",
      "zh-cn": "当前指南，明确下一步。"
    },
    "description": {
      "en": "Native setup and recovery with retired Fleet instructions removed.",
      "zh-cn": "原生配置与恢复指南，已移除退役 Fleet 操作步骤。"
    }
  },
  "security": {
    "title": {
      "en": "Know who can see and do what.",
      "zh-cn": "看清谁能看到、执行什么。"
    },
    "description": {
      "en": "Owner authority, executor access, encryption, provider data flow and postpaid limits.",
      "zh-cn": "所有者权限、执行器访问、加密、模型数据流与事后记账限额。"
    }
  },
  "updates": {
    "title": {
      "en": "Product news and practical ideas.",
      "zh-cn": "产品动态与协作实践。"
    },
    "description": {
      "en": "Explore Hagency’s architecture, Agent conversations and open collaboration.",
      "zh-cn": "了解 Hagency 架构、Agent 对话与开放协作。"
    }
  },
  "roadmap": {
    "title": {
      "en": "What’s available. What’s next.",
      "zh-cn": "当前功能与后续方向。"
    },
    "description": {
      "en": "Published releases, development updates and ongoing product improvements.",
      "zh-cn": "已发布版本、开发进展与持续改进。"
    }
  },
  "community": {
    "title": {
      "en": "Build in the open.",
      "zh-cn": "共同建设开放协作。"
    },
    "description": {
      "en": "Contribute code, improve guides and share useful Agent workflows.",
      "zh-cn": "贡献代码、改进指南并分享实用的 Agent 工作流。"
    }
  },
  "about": {
    "title": {
      "en": "More agency, with clear boundaries.",
      "zh-cn": "更多自主性，边界清晰。"
    },
    "description": {
      "en": "Hagency combines native collaboration with local Agent execution.",
      "zh-cn": "Hagency 将原生协作与本地 Agent 执行连接起来。"
    }
  },
  "media": {
    "title": {
      "en": "Hagency brand and product assets.",
      "zh-cn": "Hagency 品牌与产品素材。"
    },
    "description": {
      "en": "Hagency brand assets and product imagery.",
      "zh-cn": "Hagency 品牌素材与产品界面。"
    }
  },
  "capabilities": {
    "title": {
      "en": "Explore Hagency features.",
      "zh-cn": "了解 Hagency 的产品功能。"
    },
    "description": {
      "en": "Local coding agents, Matrix collaboration, resource pools and owner controls.",
      "zh-cn": "本地编程 Agent、Matrix 协作、资源池与所有者控制。"
    }
  },
  "compare": {
    "title": {
      "en": "Find the right fit for your team.",
      "zh-cn": "选择适合团队的协作方式。"
    },
    "description": {
      "en": "Compare Hagency and Buzz across coding runtimes, conversations and collaboration tools.",
      "zh-cn": "从编程运行时、对话和协作工具了解 Hagency 与 Buzz。"
    }
  }
};

export const trustSections: Section[] = [
  {
    "title": {
      "en": "Encrypted does not mean nobody sees the work",
      "zh-cn": "加密不等于无人可见"
    },
    "paragraphs": [
      {
        "en": "Participant devices decrypt room content. An Agent executor and the selected model provider can see the content they process. Self-hosting Server does not make inference local.",
        "zh-cn": "参与设备会解密房间内容，Agent 执行器与所选模型提供方可看到它们处理的内容；自托管 Server 不会让推理自动变为本地。"
      }
    ]
  },
  {
    "title": {
      "en": "Authorization follows identity and scope",
      "zh-cn": "授权遵循身份与范围"
    },
    "paragraphs": [
      {
        "en": "Permanent ownership, Matrix membership, binding generations, device leases and tool policy are distinct boundaries. A room moderator role is not arbitrary coding-tool permission.",
        "zh-cn": "永久所有权、Matrix 成员资格、绑定代际、设备租约与工具策略是不同边界；房间管理角色不等于任意编程工具权限。"
      }
    ]
  },
  {
    "title": {
      "en": "Understand token accounting",
      "zh-cn": "了解 token 记账"
    },
    "paragraphs": [
      {
        "en": "Usage settles against execution records. Admitted work may exceed a configured limit, and unresolved usage remains in the ledger until its outcome is confirmed.",
        "zh-cn": "用量依据执行记录结算。已接纳工作可能超过设定限额，待确认用量保留在账本中，直到执行结果得到确认。"
      }
    ]
  }
];

export const coreSlugs = [...Object.keys(pageInfo), ...['hagency','robrix2','palpo'].map(id=>`projects/${id}`)];
