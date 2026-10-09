export interface PlanCycle {
  cycleName: string;
  cycleKey: 'monthly' | 'quarterly' | 'semiAnnual' | 'annual';
  price: number;
  periodText: string;
  monthlyEquivalentText: string;
}

export interface PlanItem {
  id: string;
  name: string;
  tagline: string;
  bandwidth: string;
  cycles: PlanCycle[];
  suitableFor: string;
  confirmedFeatures: string[];
  popular?: boolean;
}

export interface HistoricalPlan {
  id: string;
  name: string;
  priceText: string;
  bandwidthText: string;
  note: string;
  onSale: boolean;
}

export const ACTIVE_PLANS: PlanItem[] = [
  {
    id: 'simple',
    name: 'SIMPLE 套餐',
    tagline: '基础轻度使用首选',
    bandwidth: '100GB / 月',
    cycles: [
      { cycleName: '月付', cycleKey: 'monthly', price: 25, periodText: '每月', monthlyEquivalentText: '¥25/月' },
      { cycleName: '季付', cycleKey: 'quarterly', price: 60, periodText: '每 3 个月', monthlyEquivalentText: '折合 ¥20.0/月' },
      { cycleName: '半年付', cycleKey: 'semiAnnual', price: 105, periodText: '每 6 个月', monthlyEquivalentText: '折合 ¥17.5/月' },
      { cycleName: '年付', cycleKey: 'annual', price: 180, periodText: '每年', monthlyEquivalentText: '折合 ¥15.0/月' }
    ],
    suitableFor: '适用于日常网页浏览、社交软件消息接收及偶尔中低画质视频观看。',
    confirmedFeatures: [
      '每月 100GB 高速流量',
      '支持多区域常用中转线路',
      '支持 Clash / Shadowrocket / V2ray 订阅格式',
      '基础并发连接保障'
    ]
  },
  {
    id: 'lite',
    name: 'LITE 套餐',
    tagline: '标准日常进阶推荐',
    bandwidth: '150GB / 月',
    popular: true,
    cycles: [
      { cycleName: '月付', cycleKey: 'monthly', price: 30, periodText: '每月', monthlyEquivalentText: '¥30/月' },
      { cycleName: '季付', cycleKey: 'quarterly', price: 72, periodText: '每 3 个月', monthlyEquivalentText: '折合 ¥24.0/月' },
      { cycleName: '半年付', cycleKey: 'semiAnnual', price: 126, periodText: '每 6 个月', monthlyEquivalentText: '折合 ¥21.0/月' },
      { cycleName: '年付', cycleKey: 'annual', price: 216, periodText: '每年', monthlyEquivalentText: '折合 ¥18.0/月' }
    ],
    suitableFor: '适用于频繁办公、在线学习、高清视频播放及多设备轮换连接。',
    confirmedFeatures: [
      '每月 150GB 高速流量',
      '优质公网隧道与 IPLC 专线路由',
      '全平台主流客户端快速配置',
      '稳定均衡的带宽响应'
    ]
  },
  {
    id: 'pro',
    name: 'PRO 套餐',
    tagline: '大流量高强度使用',
    bandwidth: '225GB / 月',
    cycles: [
      { cycleName: '月付', cycleKey: 'monthly', price: 35, periodText: '每月', monthlyEquivalentText: '¥35/月' },
      { cycleName: '季付', cycleKey: 'quarterly', price: 84, periodText: '每 3 个月', monthlyEquivalentText: '折合 ¥28.0/月' },
      { cycleName: '半年付', cycleKey: 'semiAnnual', price: 147, periodText: '每 6 个月', monthlyEquivalentText: '折合 ¥24.5/月' },
      { cycleName: '年付', cycleKey: 'annual', price: 252, periodText: '每年', monthlyEquivalentText: '折合 ¥21.0/月' }
    ],
    suitableFor: '适用于多台设备同时在线、4K超清视频传输、大文件下载与长期稳定协作。',
    confirmedFeatures: [
      '每月 225GB 大容量流量',
      '优先中转与多通道调度保障',
      '适应高并发及多网络环境切换',
      '支持完整配置文件自动化导入'
    ]
  }
];

export const HISTORICAL_PLANS: HistoricalPlan[] = [
  {
    id: 'pro-ultra',
    name: 'PRO ULTRA 历史旗舰套餐',
    priceText: '¥1499 / 年',
    bandwidthText: '18888GB / 年',
    note: '此套餐为公开历史资料记录项，目前是否继续开放实时销售需以最终收银系统为准，不作为前台默认推荐售卖项。',
    onSale: false
  }
];
