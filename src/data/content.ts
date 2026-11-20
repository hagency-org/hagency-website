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
            "en": "The reviewed main is preparing rc.14; the published Desktop snapshot is rc.13. Later Windows setup and multi-account hosting changes must not be assumed to be in rc.13. Use the capability audit and the exact release notes.",
            "zh-cn": "核验的 main 正准备 rc.14，已发布 Desktop 快照为 rc.13。更晚的 Windows 配置与多账户托管修改不能视作已包含于 rc.13；请查看能力核验页与准确的版本说明。"
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
            "en": "The rc.13 release contains a macOS ARM64 DMG and a Windows x86-64 installer, plus checksums and build manifests. No Linux, Intel macOS, Android or iOS installer is listed in this release. A successful build job is not a download asset.",
            "zh-cn": "rc.13 包含 macOS ARM64 DMG、Windows x86-64 安装程序，以及校验和与构建清单；此版本没有列出 Linux、Intel macOS、Android 或 iOS 安装包。构建成功不等于已提供下载文件。"
          },
          {
            "en": "This is a release candidate. Current main contains newer local-Codex discovery and sign-in fixes; consult release notes for your platform before relying on a runtime.",
            "zh-cn": "这是候选发行版。当前 main 包含更晚的本地 Codex 发现与登录修正；使用某个运行时前，请阅读对应平台的发布说明。"
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
          "en": "Use JIT for development",
          "zh-cn": "开发测试使用 JIT"
        },
        "paragraphs": [
          {
            "en": "Development, UI checks and integration testing use the pinned Makepad JIT. Reuse a matching runner, native dependencies and helpers. Native compilation is reserved for release work; preserve other running JITs and use isolated state.",
            "zh-cn": "开发、UI 检查与联调使用固定版本的 Makepad JIT。复用匹配的 runner、原生依赖与 helper；原生编译仅用于 release，并保留其他运行中的 JIT、隔离测试状态。"
          }
        ],
        "code": "git clone https://github.com/hagency-org/hagency-desktop.git\ncd hagency-desktop\n# Read .jit/NOTES.md and reuse the matching existing JIT runner."
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
      "en": "Choose Codex, Claude Code or an actual Octos profile without inventing credentials.",
      "zh-cn": "选择 Codex、Claude Code 或真实 Octos 配置档，不虚构凭据。"
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
            "en": "Use the models and profiles returned by the installed runtime. Two Octos profiles using the same model remain distinct configurations. Local models and custom endpoints depend on that profile; this is not a guarantee that every CLI feature is exposed.",
            "zh-cn": "使用已安装运行时返回的模型和配置档。同模型的两个 Octos 配置仍是独立配置；本地模型和自定义端点取决于该配置，这不保证 CLI 的每一项能力都已暴露。"
          }
        ]
      },
      {
        "title": {
          "en": "Start the selected scope",
          "zh-cn": "启动选定范围"
        },
        "paragraphs": [
          {
            "en": "Save the model and reasoning settings, then choose the owner private chat or a bound Room in Service and start responding. Stop before changing runtime and restart after saving. A workspace is created automatically; a custom directory is optional.",
            "zh-cn": "保存模型与推理设置，再在 Service 中选择所有者私聊或已绑定房间并开始响应。更换运行时前先停止，保存后再启动。工作目录会自动创建，自定义目录是可选项。"
          },
          {
            "en": "Codex, Claude and Octos differ in tools, file delivery and report protocols. The audit distinguishes implemented adapters from live model inference and full CLI parity.",
            "zh-cn": "Codex、Claude 与 Octos 的工具、文件交付和报告协议能力不同；核验页会区分已实现适配器、真实模型推理与完整 CLI 等价。"
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
            "en": "An Agent has a permanent owner. Assigning execution to a computer does not transfer ownership or copy its private crypto state. Current main supports per-account enrollment in one daemon; that later change is not assumed present in rc.13.",
            "zh-cn": "Agent 有永久所有者。把执行分配到某台电脑，不会转移所有权或复制私有加密状态。当前 main 支持一个 daemon 中按账户登记；这一较晚修改不能视作已包含于 rc.13。"
          }
        ]
      },
      {
        "title": {
          "en": "Recover without erasing evidence",
          "zh-cn": "恢复时保留证据"
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
            "en": "Each Agent uses one pool. Published capacity is not a live balance guarantee. Accounting is postpaid; admitted work can exceed its limit. Unknown holds, owner withdrawal and applicant removal retain their recovery and settlement rules. There is no marketplace payment or commercial billing claim.",
            "zh-cn": "每个 Agent 使用一个资源池。发布的容量不保证实时余额。用量在任务后记账，已接纳任务可能超过限额；不确定预留、所有者撤回和申请人移除仍遵循恢复与结算规则。这里不宣称市场支付或商业计费。"
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
            "en": "Supported progress and background reports are separate Matrix messages from the final answer. Equal text can be two distinct source messages; replaying one source identity must not create an extra event. Octos strong native reports and complete provider replay remain bounded by the capability audit.",
            "zh-cn": "受支持的进展与后台报告作为独立 Matrix 消息显示，与最终回答分开。相同文本可来自两条不同来源消息；重放同一来源身份不能增加额外事件。Octos 强原生报告与完整提供方重放仍受能力核验范围限制。"
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
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/testing/spontaneous-messages-real-stack.md"
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
            "en": "Codex, Claude and Octos have different tool and isolation surfaces. Shared Claude macOS confinement is not a cross-platform sandbox guarantee. Revocation prevents future authorization but cannot undo completed work or recover plaintext already received.",
            "zh-cn": "Codex、Claude 与 Octos 的工具和隔离能力不同。共享 Claude 在 macOS 的隔离不代表跨平台沙箱保证；撤销可阻止后续授权，但无法撤销已完成操作或收回已获得的明文。"
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
            "en": "Server health and Appservice ACKs show transport readiness, not a qualified model. Desktop’s owner daemon, local profile, workspace and provider sign-in must also be valid. A registered Agent identity is not proof that a model call succeeded.",
            "zh-cn": "Server 健康状态与 Appservice ACK 表示传输就绪，不代表模型通过资格检查。Desktop owner daemon、本地配置、工作目录和提供方登录也必须有效；注册 Agent 身份不等于模型调用成功。"
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
            "en": "Retain receipts, source IDs, binding generations and usage holds. Reconnect or resume the original operation when documented; do not erase uncertainty by resetting counters, creating a new request or replaying the model.",
            "zh-cn": "保留回执、来源 ID、绑定代际与用量预留。按文档重连或恢复原操作，不通过重置计数、新建请求或重跑模型来消除不确定状态。"
          }
        ]
      },
      {
        "title": {
          "en": "Test the exact deployment",
          "zh-cn": "测试准确部署版本"
        },
        "paragraphs": [
          {
            "en": "Record Desktop, Server, Palpo/Pasion pins and runtime versions. Use isolated test accounts and state. This audit separates source review, historical JIT fixtures, CI checks and newly executed UI checks; none alone certifies every production path.",
            "zh-cn": "记录 Desktop、Server、Palpo/Pasion 固定版本及运行时版本，并使用隔离测试账户与状态。本次核验区分源码审查、历史 JIT 夹具、CI 检查与新执行的 UI 检查，任一种都不能单独证明所有生产路径。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-server/blob/main/docs/TESTING.md"
  }
];

export const articles: Article[] = [
  {
    "slug": "introducing-hagency",
    "title": {
      "en": "Hagency now has two native applications",
      "zh-cn": "Hagency 现已采用双应用结构"
    },
    "description": {
      "en": "Desktop owns the workspace and local execution; Server integrates identity and Matrix.",
      "zh-cn": "Desktop 负责协作界面与本地执行，Server 集成身份和 Matrix。"
    },
    "category": {
      "en": "VERIFIED SNAPSHOT",
      "zh-cn": "核验快照"
    },
    "sections": [
      {
        "title": {
          "en": "The current boundaries",
          "zh-cn": "当前边界"
        },
        "paragraphs": [
          {
            "en": "Hagency Desktop replaces the old Robrix2-facing product story. Hagency Server integrates Palpo, Pasion and the management UI in Rust. Legacy Fleet and Engagement instructions no longer describe this system.",
            "zh-cn": "Hagency Desktop 取代旧的 Robrix2 产品叙事，Hagency Server 以 Rust 集成 Palpo、Pasion 与管理界面；旧 Fleet 和 Engagement 指南已不适用。"
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
      "en": "What the encrypted-message evidence proves",
      "zh-cn": "加密消息证据证明了什么"
    },
    "description": {
      "en": "Read the tested flow and its provider, platform and replay limits.",
      "zh-cn": "阅读已测流程，以及提供方、平台与重放限制。"
    },
    "category": {
      "en": "VERIFIED SNAPSHOT",
      "zh-cn": "核验快照"
    },
    "sections": [
      {
        "title": {
          "en": "A bounded real-stack result",
          "zh-cn": "有明确边界的真实链路结果"
        },
        "paragraphs": [
          {
            "en": "Recorded JIT tests used real Server/Pasion/Palpo and SDK encryption with a deterministic Codex protocol subprocess. They exercised distinct reports, two receivers and daemon restart, then restored a UI to render six separate Agent rows. This was not paid inference or an Element acceptance run.",
            "zh-cn": "记录的 JIT 测试使用真实 Server/Pasion/Palpo 与 SDK 加密，配合确定性 Codex 协议子进程；覆盖独立报告、双接收方与 daemon 重启，随后恢复 UI 显示六条独立 Agent 消息。这不是真实付费推理或 Element 验收。"
          }
        ]
      }
    ],
    "source": "https://github.com/hagency-org/hagency-desktop/blob/main/docs/testing/spontaneous-messages-real-stack.md",
    "date": "2026-11-19"
  },
  {
    "slug": "why-matrix",
    "title": {
      "en": "Why open protocol boundaries matter",
      "zh-cn": "开放协议边界为什么重要"
    },
    "description": {
      "en": "Interoperability, room roles and federation need precise claims.",
      "zh-cn": "互通、房间角色与联邦需要准确说明。"
    },
    "category": {
      "en": "VERIFIED SNAPSHOT",
      "zh-cn": "核验快照"
    },
    "sections": [
      {
        "title": {
          "en": "Protocol and product are separate",
          "zh-cn": "协议与产品分开评估"
        },
        "paragraphs": [
          {
            "en": "Matrix supplies users, rooms, device encryption and federation. Hagency adds owner/device leases, local execution and capacity policy. Compare Buzz fairly: its community relay, workflow, Git, canvas and harness surfaces have their own strengths, and their source evidence is not our live test result.",
            "zh-cn": "Matrix 提供用户、房间、设备加密与联邦，Hagency 增加所有者/设备租约、本地执行与容量策略。应公平比较 Buzz：其社区中继、工作流、Git、画布和 harness 各有优势，源码证据不能被视作本次实时测试结果。"
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
      "en": "An illustrative, local-only walkthrough; no account or live model is connected.",
      "zh-cn": "仅在本地运行的示意演练，不连接账户或真实模型。"
    }
  },
  "use-cases": {
    "title": {
      "en": "Choose a real workflow.",
      "zh-cn": "选择真实工作流程。"
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
      "en": "Download what actually exists.",
      "zh-cn": "下载确实存在的安装包。"
    },
    "description": {
      "en": "Reviewed release assets, platform limits and source-only components.",
      "zh-cn": "核验后的发布文件、平台限制与仅源码组件。"
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
      "en": "What changed, with evidence.",
      "zh-cn": "有证据的变化。"
    },
    "description": {
      "en": "Current architecture and bounded verification, not release promises.",
      "zh-cn": "当前架构与有边界的核验，不作发布承诺。"
    }
  },
  "roadmap": {
    "title": {
      "en": "Implemented, partial or not verified.",
      "zh-cn": "已实现、部分实现或尚未验证。"
    },
    "description": {
      "en": "Distinguish available source, release candidates and remaining gaps.",
      "zh-cn": "区分可用源码、候选发行版与仍然存在的缺口。"
    }
  },
  "community": {
    "title": {
      "en": "Build and verify in the open.",
      "zh-cn": "公开构建，公开核验。"
    },
    "description": {
      "en": "Report reproducible issues, improve documentation and test isolated workflows.",
      "zh-cn": "报告可复现问题、改进文档并测试隔离工作流程。"
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
      "en": "Real captures. Explicit provenance.",
      "zh-cn": "真实截图，明确来源。"
    },
    "description": {
      "en": "Current brand assets and separately labeled historical integration captures.",
      "zh-cn": "当前品牌素材与单独标明的历史集成截图。"
    }
  },
  "capabilities": {
    "title": {
      "en": "Every capability, with its evidence.",
      "zh-cn": "逐项能力，逐项证据。"
    },
    "description": {
      "en": "Review current Desktop and Server features, limits, source pins and test confidence.",
      "zh-cn": "核对当前 Desktop、Server 的功能、限制、源码固定版本与验证可信度。"
    }
  },
  "compare": {
    "title": {
      "en": "Hagency and Buzz, without the hype.",
      "zh-cn": "客观比较 Hagency 与 Buzz。"
    },
    "description": {
      "en": "Compare the same tasks and retain unknowns instead of manufacturing a winner.",
      "zh-cn": "比较相同任务，保留未知项，不制造未经证实的胜者。"
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
      "en": "Limits are not financial billing",
      "zh-cn": "限额不等于商业计费"
    },
    "paragraphs": [
      {
        "en": "Accounting follows completed or retained evidence. Admitted work may exceed a limit. Unknown usage remains unresolved, not zero; revocation cannot undo already completed work.",
        "zh-cn": "记账遵循已完成或保留的证据。已接纳工作可能超限，不确定用量保持待确认而非零；撤销不能撤回已经完成的工作。"
      }
    ]
  }
];

export const coreSlugs = [...Object.keys(pageInfo), ...['hagency','robrix2','palpo'].map(id=>`projects/${id}`)];
