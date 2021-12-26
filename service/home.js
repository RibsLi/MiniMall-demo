import request from './network'
// 请求轮播数据
export function getBanners() {
  return request({
    url: "/home/multidata"
  })
}
// 请求商品数据
export function getGoodsData(type, page) {
  return request({
    url: "/home/data",
    data: {
      type,
      page
    }
  })
}