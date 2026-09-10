import { b, type Project, type Text } from './site';
import assets from './screenshot-assets.json';

export type ProjectScreenshot = {
  id: string;
  project: Project['id'];
  application: Text;
  title: Text;
  description: Text;
  alt: Text;
  language: Text;
  width: number;
  height: number;
  previewOffset?: number;
};

const copy: Omit<ProjectScreenshot, 'width' | 'height'>[] = [
  {
    id: 'hagency-resources', project: 'hagency', application: b('Hagency console', 'Hagency 控制台'),
    title: b('Your resources, in one place.', '资源配置，一目了然。'),
    description: b('Configure model resources, publish them to Palpo, and inspect agent allocations from the resource owner’s console.', '在资源方控制台配置模型资源、发布到 Palpo，并查看 Agent 的资源分配。'),
    alt: b('Hagency resource console with model presets, quota declarations, publishing controls, and agent instances.', 'Hagency 资源控制台，展示模型预设、额度声明、资源发布按钮与 Agent 实例。'),
    language: b('Chinese UI', '中文界面'),
  },
  {
    id: 'hagency-engagements', project: 'hagency', application: b('Hagency console', 'Hagency 控制台'),
    title: b('See who is using your capacity.', '看清资源由谁使用。'),
    description: b('Review connected project sides, active engagements, allocations, and the controls for revoking access.', '查看已接入的项目方、当前接洽与额度分配，并通过撤销入口管理接入权限。'),
    alt: b('Hagency engagements page showing a connected test homeserver, one approved engagement, allocation amounts, and a revoke button.', 'Hagency 接洽页面，展示测试服务器连接、已批准的接洽、分配额度与撤销按钮。'),
    language: b('English UI', '英文界面'),
  },
  {
    id: 'robrix2-group-files', project: 'robrix2', application: b('Robrix2 native client', 'Robrix2 原生客户端'),
    title: b('From a conversation to a delivered file.', '从对话，到文件交付。'),
    description: b('A native desktop thread shows an agent’s CSV calculation and the returned result file, alongside rooms and open conversation tabs.', '原生桌面客户端的线程中，Agent 完成 CSV 计算并返回结果文件；房间列表与多会话标签同时可见。'),
    alt: b('Robrix2 desktop client displaying a group task thread, agent progress, a calculation result, and a downloadable file.', 'Robrix2 桌面客户端，展示群聊任务线程、Agent 进度、计算结果与可下载文件。'),
    language: b('English UI · Chinese conversation', '英文界面 · 中文对话'),
  },
  {
    id: 'robrix2-encrypted-files', project: 'robrix2', application: b('Robrix2 native client', 'Robrix2 原生客户端'),
    title: b('File collaboration in an encrypted room.', '在加密房间里协作处理文件。'),
    description: b('The encrypted direct-message verification scene shows a CSV attachment, agent progress, and a returned text file. Room lock indicators remain visible.', '加密私聊验证画面展示 CSV 附件、Agent 处理进度和返回的文本文件，保留房间的锁形标识。'),
    alt: b('Robrix2 encrypted test conversation with a CSV input, agent calculation, downloadable result, and locked room indicators.', 'Robrix2 加密测试会话，包含 CSV 输入、Agent 计算、可下载结果与房间锁形标识。'),
    language: b('English UI · Chinese conversation', '英文界面 · 中文对话'),
  },
  {
    id: 'palpo-project-access', project: 'palpo', application: b('Palpo companion admin', 'Palpo 配套管理界面'),
    title: b('Connect a fleet. Bring a project online.', '接入机群，开启项目协作。'),
    description: b('The companion web app shows connection readiness, project registration, approval-room links, and an agent request form.', '配套 Web 管理界面展示连接就绪状态、项目注册、审批房间入口与 Agent 申请表单。'),
    alt: b('Palpo companion administration page showing a ready Hagency connection, a registered test project, and an agent request form.', 'Palpo 配套管理页面，展示已就绪的 Hagency 连接、已注册的测试项目与 Agent 申请表单。'),
    language: b('English UI', '英文界面'),
  },
  {
    id: 'palpo-resource-catalog', project: 'palpo', application: b('Palpo companion admin', 'Palpo 配套管理界面'),
    previewOffset: 45.5,
    title: b('Choose resources. Define your agent.', '选择资源，定义你的 Agent。'),
    description: b('A later integration view adds a resource catalog, named agent definitions, and request status. This is the separate development admin app for the Palpo–Hagency integration.', '后续集成画面增加了资源目录、具名 Agent 定义与申请状态。这是 Palpo–Hagency 集成的独立开发版管理应用。'),
    alt: b('Palpo companion app with registered projects, three resource cards, an agent definition form, and request status entries.', 'Palpo 配套应用，展示已注册项目、三张资源卡片、Agent 定义表单与申请状态记录。'),
    language: b('English UI', '英文界面'),
  },
];

export const screenshots: ProjectScreenshot[] = copy.map(item => {
  const asset = assets.find(asset => asset.id === item.id);
  if (!asset) throw new Error(`Missing screenshot asset: ${item.id}`);
  return { ...item, width: asset.width, height: asset.height };
});
export const projectScreenshots = (project: Project['id']) => screenshots.filter(shot => shot.project === project);
export const screenshotUI = {
  label: b('INSIDE THE PROJECT', '走进项目'),
  title: b('See the workspace in action.', '看看实际工作界面。'),
  intro: b('Real interfaces from the September 2026 integration verification. Open any screenshot to explore the full view.', '来自 2026 年 9 月集成验证的真实界面。点击任意截图，查看完整画面。'),
  preview: b('Development integration · Sep 2026', '开发版集成 · 2026 年 9 月'),
  open: b('View full screenshot', '查看完整截图'),
  original: b('Open original image', '打开原图'),
  actual: b('Actual size', '实际大小'),
  fit: b('Fit to width', '适应宽度'),
  loading: b('Loading screenshot…', '正在加载截图…'),
  error: b('The screenshot could not load. Try opening the original image.', '截图加载失败，请尝试打开原图。'),
  scope: b('These are development integration screens with test accounts and data. They may differ from published releases. Some captures predate the product rename and retain their original labels. Screenshot languages are preserved as captured.', '画面来自开发版集成验证，使用测试账户与数据，可能与已发布版本不同。部分截图拍摄于产品改名之前，保留当时的标签和界面语言。'),
  palpoScope: b('Palpo is the Matrix homeserver. The screens below show its separate companion administration app for the Hagency integration; this app is not included in the Palpo v0.4.0 server release.', 'Palpo 是 Matrix 服务器。以下截图展示 Hagency 集成所使用的独立配套管理应用，该应用不包含在 Palpo v0.4.0 服务器发布包中。'),
};
