export interface ArticleMeta {
  slug: string;
  urlPath: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  summary: string;
}

export const ARTICLE_LIST: ArticleMeta[] = [
  {
    slug: 'before-payment',
    urlPath: '/library/before-payment/',
    title: 'Gsou Cloud付款前应该了解什么？套餐金额与流量权益阅读方法',
    description: '深入了解 Gsou Cloud 的 SIMPLE、LITE、PRO 套餐月付、季付、半年付与年付的价格换算规则、流量配额重置逻辑及付款前核对事项。',
    category: '订阅指南',
    publishDate: '2026-10-09',
    readTime: '5 分钟',
    summary: '本文解析 Gsou Cloud 套餐的四种付款周期、实际应付金额计算方法、月度流量配额重置机制以及在下单结算前需要逐一核对的关键参数。'
  },
  {
    slug: 'route-journey',
    urlPath: '/library/route-journey/',
    title: 'Gsou Cloud网络连接中的路由路径是什么？从设备到目标网站的过程',
    description: '全面拆解从本地客户端发起网络请求到经过公网隧道、IPLC 专线中转并到达目标服务器的全过程与各环节影响因素。',
    category: '网络技术',
    publishDate: '2026-10-09',
    readTime: '6 分钟',
    summary: '揭秘数据包在加密网络传输中的物理与逻辑路径，详细说明本地 DNS 响应、运营商入口、中转节点及出口目标服务器的作用关系。'
  },
  {
    slug: 'data-behavior',
    urlPath: '/library/data-behavior/',
    title: '为什么相同流量额度的用户体验不同？Gsou Cloud流量使用行为分析',
    description: '分析不同应用场景、视频分辨率码率、后台自动同步及文件下载对 100GB 到 225GB 流量消耗速率的深层影响。',
    category: '流量管理',
    publishDate: '2026-10-09',
    readTime: '5 分钟',
    summary: '探索同样持有 150GB 流量额度的用户为何消耗速度差异巨大的原因，提供合理的流量分配建议与防止非预期流量流失的防护手段。'
  },
  {
    slug: 'maintenance-calendar',
    urlPath: '/library/maintenance-calendar/',
    title: 'Gsou Cloud客户端配置维护日历：哪些项目需要定期检查？',
    description: '整理一套涵盖客户端版本升级、订阅节点同步、系统时间校准及网络代理规则检查的定期维护清单与实操步骤。',
    category: '客户端维护',
    publishDate: '2026-10-09',
    readTime: '5 分钟',
    summary: '建立系统化的客户端配置检查习惯，预防节点失效、配置解析失败、加密协议不匹配及网络代理冲突等常见使用障碍。'
  },
  {
    slug: 'error-messages',
    urlPath: '/library/error-messages/',
    title: 'Gsou Cloud用户如何阅读连接错误信息？常见提示和处理原则',
    description: '归纳分析连接超时、DNS 无法解析、SSL/TLS 证书报错及握手鉴权失败背后的技术原理与排查解决逻辑。',
    category: '故障排查',
    publishDate: '2026-10-09',
    readTime: '6 分钟',
    summary: '学会看懂 Clash、Shadowrocket 等客户端日志输出中的错误关键字，掌握从本地网络到服务器握手分层排查的标准工作流。'
  },
  {
    slug: 'device-limits',
    urlPath: '/library/device-limits/',
    title: 'Gsou Cloud套餐与设备数量有什么关系？多设备使用前需要核实的条件',
    description: '辨析已配置设备与并发在线连接设备的区别，讲解多终端共享订阅时的安全性、流量分配及网络切换注意事项。',
    category: '设备管理',
    publishDate: '2026-10-09',
    readTime: '5 分钟',
    summary: '阐明网络订阅在桌面电脑、手机、平板等多设备协同工作时的接入逻辑，帮助用户避免因配置泄露或并发超限导致的连接异常。'
  },
  {
    slug: 'experience-evaluation',
    urlPath: '/library/experience-evaluation/',
    title: 'Gsou Cloud使用体验如何客观判断？从延迟到实际任务完成情况',
    description: '建立超越单一 Speedtest 测速数值的综合网络体验评估模型，包含响应时延、带宽持续性、视频起播及网络抖动测试。',
    category: '体验评测',
    publishDate: '2026-10-09',
    readTime: '6 分钟',
    summary: '介绍科学的网络使用体验测评方法，通过多时段对比测试与实际应用交付完成率，客观看待节点延迟与传输速度的关系。'
  }
];
