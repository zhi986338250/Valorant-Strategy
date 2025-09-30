// pages/tactics/tactics.ts
Page({
   data:{
    mapId: '',
    heroId: '',
    heroName: '',
    mapName: ''
  },

  onLoad(options: any) {
    this.setData({
      mapId: options.mapId,
      heroId: options.heroId
    });
    
    this.loadHeroAndMapInfo();
  },

  loadHeroAndMapInfo() {
    // 获取英雄和地图信息
    const heroName = this.getHeroName(this.data.heroId);
    const mapName = this.getMapName(this.data.mapId);
    
    this.setData({
      heroName: heroName,
      mapName: mapName
    });
  },

  getHeroName(heroId: string): string {
    const heroNames: Record<string, string> = {
      'hero1': '盖克',
      'hero2': '黑梦',
      'hero3': '猎枭',
      'hero4': '斯凯',
      'hero5': '钛狐',
      'hero6': '铁壁',
      'hero7': 'ko',
      'hero8': '火男',
      'hero9': '捷风',
      'hero10': '雷兹',
      'hero11': '幻棱',
      'hero12': '霓虹',
      'hero13': '蕾娜',
      'hero14': '夜露',
      'hero15': '一绝',
      'hero16': '奇乐',
      'hero17': '钱包',
      'hero18': '维斯',
      'hero19': '奶妈',
      'hero20': '钢索',
      'hero21': '保安',
      'hero22': '蝰蛇',
      'hero23': '烟男',
      'hero24': '暮蝶',
      'hero25': '欧门',
      'hero26': '海神',
      'hero27': '星邃',
    };
    return heroNames[heroId] || '未知英雄';
  },

  getMapName(mapId: string): string {
    const mapNames: Record<string, string> = {
      'map1': '霓虹町',
      'map2': '裂变峡谷',
      'map3': '隐世修所',
      'map4': '亚海悬城',
      'map5': '莲华古城',
      'map6': '微风岛屿',
      'map7': '深海明珠',
      'map8': '森寒冬港',
      'map9': '盐海矿镇',
      'map10': '日落之城',
      'map11': '源工重镇',
      'map12': '幽邃地窟',
    };
    return mapNames[mapId] || '未知地图';
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