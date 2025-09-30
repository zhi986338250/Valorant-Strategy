// 定义数据类型
export interface Point {
  id: string;
  title: string;
  description: string;  // 简单描述（列表显示）
  detailImage: string;  // 详情图片
  detailDesc: string;   // 详细描述
  tags: string[];       // 标签
}

export interface Strategy {
  mapId: string;
  heroId: string;
  tactic: 'attack' | 'defense';
  points: Point[];
}