var app = getApp()
Page({
  onLoad: function () {
    console.log(app)
    this.setData({
      hasLogin: app.globalData.hasLogin ? app.globalData.hasLogin:false
    })
  },
  data: {},
  login: function () {
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  }
})
