export const steps = [
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Sign in",
      "zh-cn": "登录"
    },
    "description": {
      "en": "Connect Desktop to Hagency Server and complete Pasion authorization.",
      "zh-cn": "连接 Desktop 到 Hagency Server，完成 Pasion 授权。"
    },
    "status": {
      "en": "Account connected",
      "zh-cn": "账户已连接"
    },
    "actor": {
      "en": "You",
      "zh-cn": "你"
    },
    "message": {
      "en": "Sign in with my account.",
      "zh-cn": "使用我的账户登录。"
    },
    "detail": {
      "en": "OAuth / PKCE · device session",
      "zh-cn": "OAuth / PKCE · 设备会话"
    },
    "guide": "connect-fleet",
    "icon": "network"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Create your Agent",
      "zh-cn": "创建 Agent"
    },
    "description": {
      "en": "After hosting this account on the execution computer, add a local Agent. A Project is not required.",
      "zh-cn": "先在执行电脑托管当前账户，再添加本地 Agent；无需预先创建 Project。"
    },
    "status": {
      "en": "Personal Agent created",
      "zh-cn": "个人 Agent 已创建"
    },
    "actor": {
      "en": "You",
      "zh-cn": "你"
    },
    "message": {
      "en": "Create Atlas and open its private conversation.",
      "zh-cn": "创建 Atlas 并打开私密对话。"
    },
    "detail": {
      "en": "Permanent owner · private by default",
      "zh-cn": "永久所有者 · 默认私密"
    },
    "guide": "request-agent",
    "icon": "people"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Choose a local runtime",
      "zh-cn": "选择本地运行时"
    },
    "description": {
      "en": "Select Codex, Claude or an actual installed Octos profile.",
      "zh-cn": "选择 Codex、Claude 或实际安装的 Octos 配置。"
    },
    "status": {
      "en": "Runtime selected",
      "zh-cn": "已选择运行时"
    },
    "actor": {
      "en": "Owner",
      "zh-cn": "所有者"
    },
    "message": {
      "en": "Use my selected profile and workspace.",
      "zh-cn": "使用我选定的配置与工作区。"
    },
    "detail": {
      "en": "Local credentials · selected model",
      "zh-cn": "本地凭据 · 所选模型"
    },
    "guide": "run-hagency",
    "icon": "fleet"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Send a clear task",
      "zh-cn": "发送明确任务"
    },
    "description": {
      "en": "Start in the private conversation; group rooms need a bound mention.",
      "zh-cn": "从私密对话开始，群聊需要绑定与明确提及。"
    },
    "status": {
      "en": "Task accepted",
      "zh-cn": "已接纳任务"
    },
    "actor": {
      "en": "You",
      "zh-cn": "你"
    },
    "message": {
      "en": "Review this API change and summarize the updates needed.",
      "zh-cn": "审阅这项 API 修改，并总结需要同步更新的内容。"
    },
    "detail": {
      "en": "Private conversation · bounded scope",
      "zh-cn": "私密对话 · 限定范围"
    },
    "guide": "task-threads",
    "icon": "chat"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Follow separate updates",
      "zh-cn": "跟进独立更新"
    },
    "description": {
      "en": "Captured supported reports appear as individual chat messages.",
      "zh-cn": "捕获的受支持报告以独立聊天消息呈现。"
    },
    "status": {
      "en": "Work in progress",
      "zh-cn": "工作进行中"
    },
    "actor": {
      "en": "Atlas",
      "zh-cn": "Atlas"
    },
    "message": {
      "en": "I found the failing assertion and am checking its cause.",
      "zh-cn": "我找到了失败断言，正在检查原因。"
    },
    "detail": {
      "en": "Progress update",
      "zh-cn": "进展更新"
    },
    "guide": "task-threads",
    "icon": "activity"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Make the owner decision",
      "zh-cn": "作出所有者决策"
    },
    "description": {
      "en": "Review the exact supported permission request before deciding.",
      "zh-cn": "决定前审核准确支持的权限请求。"
    },
    "status": {
      "en": "Waiting for a bound decision",
      "zh-cn": "等待绑定决策"
    },
    "actor": {
      "en": "Owner control",
      "zh-cn": "所有者控制"
    },
    "message": {
      "en": "Allow this supported operation in its requested scope.",
      "zh-cn": "在请求的范围内允许此受支持操作。"
    },
    "detail": {
      "en": "Chat text is not approval",
      "zh-cn": "聊天文本不构成审批"
    },
    "guide": "approvals",
    "icon": "shield"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Inspect the result",
      "zh-cn": "检查结果"
    },
    "description": {
      "en": "Review the returned explanation, changes and task results.",
      "zh-cn": "审阅返回的解释、修改与任务结果。"
    },
    "status": {
      "en": "Result received",
      "zh-cn": "已收到结果"
    },
    "actor": {
      "en": "Atlas",
      "zh-cn": "Atlas"
    },
    "message": {
      "en": "Here is the proposed change and the execution result for review.",
      "zh-cn": "这是供审阅的修改方案与执行结果。"
    },
    "detail": {
      "en": "Changes and results",
      "zh-cn": "修改与结果"
    },
    "guide": "share-files",
    "icon": "file"
  },
  {
    "project": "Hagency Desktop",
    "title": {
      "en": "Continue, stop or share",
      "zh-cn": "继续、停止或共享"
    },
    "description": {
      "en": "Continue in the same context, stop new work, or request a separately approved pool Agent.",
      "zh-cn": "在相同上下文继续，停止新工作，或另行申请需审核的资源池 Agent。"
    },
    "status": {
      "en": "Your next decision",
      "zh-cn": "下一步由你决定"
    },
    "actor": {
      "en": "You",
      "zh-cn": "你"
    },
    "message": {
      "en": "Keep this thread for the follow-up.",
      "zh-cn": "在此线程继续后续工作。"
    },
    "detail": {
      "en": "Retain receipts · reconcile actual usage",
      "zh-cn": "保留凭据 · 对账实际用量"
    },
    "guide": "operations",
    "icon": "arrow"
  }
];
