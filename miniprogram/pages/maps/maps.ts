// pages/maps/maps.ts
Page({
  data: {
    heroes: [] as Array<{id: string, name: string, avatar: string, category: string}>,
    filteredHeroes: [] as Array<{id: string, name: string, avatar: string, category: string}>,
    categories: ['全部', '先锋', '决斗', '哨位', '控场'],
    selectedCategory: '全部',
    mapId: ''
  },

  onLoad(options: any) {
    this.setData({
      mapId: options.mapId
    });
    this.loadHeroes();
  },

  loadHeroes() {
    // 模拟英雄数据（27位英雄，4大类别）
    const mockHeroes = [
      // 先锋 (7位)
      { id: 'hero1', name: '盖克', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/gaike.jpg', category: '先锋' },
      { id: 'hero2', name: '黑梦', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/heimeng.jpg', category: '先锋' },
      { id: 'hero3', name: '猎枭', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/liexiao.jpg', category: '先锋' },
      { id: 'hero4', name: '斯凯', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/sikai.webp', category: '先锋' },
      { id: 'hero5', name: '钛狐', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/taihu.jpg', category: '先锋' },
      { id: 'hero6', name: '铁壁', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/tiebi.png', category: '先锋' },
      { id: 'hero7', name: 'ko', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/ko.webp', category: '先锋' },
      
      // 决斗 (8位)
      { id: 'hero8', name: '火男', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/huonan.webp', category: '决斗' },
      { id: 'hero9', name: '捷风', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/jiefeng.jpg', category: '决斗' },
      { id: 'hero10', name: '雷兹', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/leizi.jpg', category: '决斗' },
      { id: 'hero11', name: '幻棱', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/huanleng.jpg', category: '决斗' },
      { id: 'hero12', name: '霓虹', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/nihong.jpg', category: '决斗' },
      { id: 'hero13', name: '蕾娜', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/leina.jpg', category: '决斗' },
      { id: 'hero14', name: '夜露', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/yelu.jpg', category: '决斗' },
      { id: 'hero15', name: '一绝', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/yijue.jpg', category: '决斗' },
      
      // 哨位 (6位)
      { id: 'hero16', name: '奇乐', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/qile.jpg', category: '哨位' },
      { id: 'hero17', name: '钱包', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/qianbao.jpg', category: '哨位' },
      { id: 'hero18', name: '维斯', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/weisi.webp', category: '哨位' },
      { id: 'hero19', name: '奶妈', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/naima.jpg', category: '哨位' },
      { id: 'hero20', name: '钢锁', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/gangsuo.jpg', category: '哨位' },
      { id: 'hero21', name: '保安', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/baoan.jpg', category: '哨位' },
      
      // 控场 (6位)
      { id: 'hero22', name: '蝰蛇', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/kuishe.jpg', category: '控场' },
      { id: 'hero23', name: '烟男', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/yannan.jpg', category: '控场' },
      { id: 'hero24', name: '暮蝶', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/mudie.jpg', category: '控场' },
      { id: 'hero25', name: '欧门', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/oumen.jpg', category: '控场' },
      { id: 'hero26', name: '海神', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/haishen.jpg', category: '控场' },
      { id: 'hero27', name: '星邃', avatar: 'https://valorant-strategy.oss-cn-heyuan.aliyuncs.com/images/heroes/xingsui.jpg', category: '控场' }
    ];
    this.setData({
      heroes: mockHeroes,
      filteredHeroes: mockHeroes
    });
  },

  selectCategory(e: any) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      selectedCategory: category
    });
    
    if (category === '全部') {
      this.setData({
        filteredHeroes: this.data.heroes
      });
    } else {
      const filtered = this.data.heroes.filter(hero => hero.category === category);
      this.setData({
        filteredHeroes: filtered
      });
    }
  },

  selectHero(e: any) {
    const heroId = e.currentTarget.dataset.heroId;
    wx.navigateTo({
      url: `/pages/tactics/tactics?mapId=${this.data.mapId}&heroId=${heroId}`
    });
  },

  goBack() {
    wx.navigateBack();
  }
});