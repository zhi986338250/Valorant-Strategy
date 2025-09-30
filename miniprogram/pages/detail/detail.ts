import { strategyManager } from '../../utils/data';

Page({
   data:{
    point: {
      id: '',
      title: '',
      description: '',
      detailImages: [] as string[],
      detailDescs: [] as string[], 
      tags: [] as string[],
      mapId: '',
      heroId: '',
      tactic: ''
    },
    heroName: '',
    mapName: '',
    tacticName: '',
    currentImageIndex: 0  // 当前显示的图片索引
  },

  onLoad(options: any) {
    console.log('详情页参数:', options);
    const pointId = options.pointId;
    this.loadPointDetail(pointId);
  },

  loadPointDetail(pointId: string) {
    // 直接根据点位ID获取详情
    const pointDetail = strategyManager.getPointDetail(pointId);
    
    console.log('获取到的点位详情:', pointDetail);
    
    if (pointDetail) {
      // 确保 detailImages 和 detailDescs 是数组格式
      const detailImages = Array.isArray(pointDetail.detailImages) 
        ? pointDetail.detailImages 
        : [pointDetail.detailImage || ''];
      
      const detailDescs = Array.isArray(pointDetail.detailDescs) 
        ? pointDetail.detailDescs 
        : [pointDetail.detailDesc || ''];
      
      this.setData({
        point: {
          ...pointDetail,
          detailImages: detailImages,
          detailDescs: detailDescs
        },
        heroName: this.getHeroName(pointDetail.heroId),
        mapName: this.getMapName(pointDetail.mapId),
        tacticName: pointDetail.tactic === 'attack' ? '进攻' : '防守'
      });
    } else {
      console.error('未找到点位详情:', pointId);
    }
  },

  // 预览当前图片
  previewImage(e: any) {
    // 获取当前点击图片的索引（通过data-index传递）
    const index = e.currentTarget.dataset.index || this.data.currentImageIndex;
    const images = this.data.point.detailImages;
    
    wx.previewImage({
      current: images[index],  // 预览当前点击的图片
      urls: images
    });
  },

  // 切换到下一张图片
  nextImage() {
    const images = this.data.point.detailImages;
    if (images.length > 1) {
      const nextIndex = (this.data.currentImageIndex + 1) % images.length;
      this.setData({
        currentImageIndex: nextIndex
      });
    }
  },

  // 切换到上一张图片
  prevImage() {
    const images = this.data.point.detailImages;
    if (images.length > 1) {
      const prevIndex = this.data.currentImageIndex === 0 
        ? images.length - 1 
        : this.data.currentImageIndex - 1;
      this.setData({
        currentImageIndex: prevIndex
      });
    }
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

  goBack() {
    wx.navigateBack();
  }
});