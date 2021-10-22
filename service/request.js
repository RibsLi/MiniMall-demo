const baseURL = "http://152.136.185.210:8000/api/w6"
const timeout = 5000
export default function request(options){
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      method: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  })
}