// pages/strategies/strategies.ts
Page({
   data:{
    strategies: [] as Array<{id: string, name: string, description: string}>,
    mapId: '',
    heroId: '',
    tactic: ''
  },

  onLoad(options: any) {
    this.setData({
      mapId: options.mapId,
      heroId: options.heroId,
      tactic: options.tactic
    });
    this.loadStrategies();
  },

  loadStrategies() {
    // 模拟攻略数据
    const mockStrategies = [
      { id: 'strategy1', name: 'A点进攻', description: 'A点进攻的详细策略和点位描述' },
      { id: 'strategy2', name: 'B点防守', description: 'B点防守的详细策略和点位描述' },
      { id: 'strategy3', name: '中路控制', description: '中路控制的详细策略和点位描述' },
      { id: 'strategy4', name: '包点抢夺', description: '包点抢夺的详细策略和点位描述' }
    ];
    this.setData({
      strategies: mockStrategies
    });
  },

  selectStrategy(e: any) {
    const strategyId = e.currentTarget.dataset.strategyId;
    wx.navigateTo({
      url: `/pages/detail/detail?strategyId=${strategyId}`
    });
  },

  goBack() {
    wx.navigateBack();
  }
});