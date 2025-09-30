import { Strategy, Point } from './types';

class StrategyDataManager {
  private strategies: Strategy[] = [];
  
  // 初始化数据
  init() {
    // 这里可以加载数据，暂时用模拟数据
    this.strategies = this.loadStrategiesData();
  }
  
  // 加载策略数据
  private loadStrategiesData(): Strategy[] {
    // 模拟数据，实际项目中从OSS或其他地方加载
    return [
      {
        mapId: 'map1',
        heroId: 'hero1',
        tactic: 'attack',
        points: [
          {
            id: 'p1',
            title: 'A点包点控制',
            description: '使用技能控制A点入口，配合队友下包',
            detailImage: 'https://your-oss-bucket.oss-cn-hangzhou.aliyuncs.com/strategies/map1-hero1-attack-p1.jpg',
            detailDesc: '详细攻略：站位在A点入口，利用技能控制敌人视野，等待队友信号后协同下包...',
            tags: ['控制', '入口', '技能']
          },
          {
            id: 'p2',
            title: 'A点后点包抄',
            description: '从后点包抄，打敌人出其不意',
            detailImage: 'https://your-oss-bucket.oss-cn-hangzhou.aliyuncs.com/strategies/map1-hero1-attack-p2.jpg',
            detailDesc: '详细攻略：从A点后方绕后，利用地形优势...',
            tags: ['包抄', '偷袭', '后点']
          }
        ]
      }
    ];
  }
  
  // 获取分层数据结构
  getStrategiesByMap(): Record<string, Record<string, Record<'attack' | 'defense', Point[]>>> {
    const result: Record<string, Record<string, Record<'attack' | 'defense', Point[]>>> = {};
    
    this.strategies.forEach(strategy => {
      if (!result[strategy.mapId]) {
        result[strategy.mapId] = {};
      }
      
      if (!result[strategy.mapId][strategy.heroId]) {
        result[strategy.mapId][strategy.heroId] = { attack: [], defense: [] };
      }
      
      result[strategy.mapId][strategy.heroId][strategy.tactic] = strategy.points;
    });
    
    return result;
  }
  
  // 根据条件获取点位
  getPoints(mapId: string, heroId: string, tactic: 'attack' | 'defense'): Point[] {
    const strategies = this.getStrategiesByMap();
    return strategies[mapId]?.[heroId]?.[tactic] || [];
  }
  
  // 获取点位详情
  getPointDetail(mapId: string, heroId: string, tactic: 'attack' | 'defense', pointId: string): Point | null {
    const points = this.getPoints(mapId, heroId, tactic);
    return points.find(point => point.id === pointId) || null;
  }
}

// 创建单例
export const strategyManager = new StrategyDataManager();