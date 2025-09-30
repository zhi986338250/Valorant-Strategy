// pages/index/index.ts
Page({
  data: {
    maps: [] as Array<{id: string, name: string, image: string}>
  },

  onLoad() {
    // 模拟地图数据（12张地图）
    const mockMaps = [
      { id: 'map1', name: '霓虹町', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/nihong.jpg' },
      { id: 'map2', name: '裂变峡谷', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/liebian.jpg' },
      { id: 'map3', name: '隐世修所', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/yinshi.jpg' },
      { id: 'map4', name: '亚海悬城', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/yahai.jpg' },
      { id: 'map5', name: '莲华古城', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/lianhua.jpg' },
      { id: 'map6', name: '微风岛屿', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/weifeng.jpg' },
      { id: 'map7', name: '深海明珠', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/shenhai.jpg' },
      { id: 'map8', name: '森寒冬港', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/senhan.jpg' },
      { id: 'map9', name: '盐海矿镇', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/yanhai.png' },
      { id: 'map10', name: '日落之城', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/riluo.png' },
      { id: 'map11', name: '源工重镇', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/yuangong.jpg' },
      { id: 'map12', name: '幽邃地窟', image: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/maps/yousui.png' }
    ];
    this.setData({
      maps: mockMaps
    });
  },

  selectMap(e: any) {
    const mapId = e.currentTarget.dataset.mapId;
    wx.navigateTo({
      url: `/pages/maps/maps?mapId=${mapId}`
    });
  }
});