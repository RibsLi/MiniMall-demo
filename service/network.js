const baseURL = "http://152.136.185.210:8000/api/w6"
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: resolve,
      fail: reject
      // success: function(res) {
      //   console.log(res);
      //   resolve(res)
      // },
      // fail: function(err) {
      //   console.log(err);
      //   reject(err)
      // }
    })
  })
}