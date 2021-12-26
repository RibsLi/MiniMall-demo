import {getBanners, getGoodsData} from '../../service/home'

Page({
  data: {
    banners: [],
    recommends: [],
    titles:['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] },
    },
    currentType: 'pop'
  },
  onLoad: function (options) {
    this.getBanners()
    this.getGoodsData("pop")
    this.getGoodsData('new')
    this.getGoodsData('sell')
  },
  // 请求轮播数据
  getBanners() {
    getBanners().then(res => {
      // console.log(res);
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },
  // tabcontrol点击事件
  tabClick(event) {
    // console.log(event);
    const index = event.detail.index
    const types = ['pop', 'new', 'sell']
    this.setData({
      currentType: types[index]
    })
  },
  // 请求商品数据
  getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      console.log(res);
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  }
})