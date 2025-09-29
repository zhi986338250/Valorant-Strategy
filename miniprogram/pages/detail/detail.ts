// pages/detail/detail.ts
Page({
   data:{
    strategy: {
      id: '',
      image: '/images/strategies/yinshi.jpg',
      description: '这里是详细的点位描述文字，包含具体的攻略要点和操作建议。'
    }
  },

  onLoad(options: any) {
    const strategyId = options.strategyId;
    this.loadStrategy(strategyId);
  },

  loadStrategy(strategyId: string) {
    // 模拟加载攻略详情
    const mockStrategy = {
      id: strategyId,
      image: '/images/strategies/yinshi.jpg',
      description: '这里是详细的点位描述文字，包含具体的攻略要点和操作建议。根据你的选择，这里会显示对应地图、英雄和战术的详细攻略内容。'
    };
    this.setData({
      strategy: mockStrategy
    });
  },

  goBack() {
    wx.navigateBack();
  }
});