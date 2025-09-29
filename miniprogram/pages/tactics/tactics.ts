// pages/tactics/tactics.ts
Page({
  data: {
    mapId: '',
    heroId: ''
  },

  onLoad(options: any) {
    this.setData({
      mapId: options.mapId,
      heroId: options.heroId
    });
  },

  selectTactic(e: any) {
    const tactic = e.currentTarget.dataset.tactic;
    wx.navigateTo({
      url: `/pages/strategies/strategies?mapId=${this.data.mapId}&heroId=${this.data.heroId}&tactic=${tactic}`
    });
  },

  goBack() {
    wx.navigateBack();
  }
});