import { pointsData } from '../data/points';

console.log('加载的点位数据:', pointsData); // 添加这行调试信息

class StrategyDataManager {
  // 根据条件筛选点位
  getPoints(mapId: string, heroId: string, tactic: 'attack' | 'defense'): any[] {
    console.log('数据管理器 - 筛选参数:', { mapId, heroId, tactic });
    console.log('数据管理器 - 总数据量:', pointsData.length);
    
    const filteredPoints = pointsData.filter(point => {
      const match = point.mapId === mapId && 
                   point.heroId === heroId && 
                   point.tactic === tactic;
      
      if (match) {
        console.log('匹配到的点位:', point);
      }
      
      return match;
    });
    
    console.log('数据管理器 - 筛选结果数量:', filteredPoints.length);
    console.log('数据管理器 - 筛选结果:', filteredPoints);
    
    return filteredPoints;
  }
  
  // 获取点位详情
  getPointDetail(pointId: string): any | null {
    console.log('获取点位详情 - ID:', pointId);
    const detail = pointsData.find(point => point.id === pointId);
    console.log('获取点位详情 - 结果:', detail);
    return detail || null;
  }
}

// 创建单例 - 修正类名
export const strategyManager = new StrategyDataManager();