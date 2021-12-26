import request from './network'
// 请求轮播数据
export function getBanners() {
  return request({
    url: "/home/multidata"
  })
}