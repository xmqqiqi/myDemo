Page({
  navigateTo:function(){
    wx.navigateTo({
      url: './pageJump'
    })
  },
  navigateBack:function(){
    wx.navigateBack()
  },
  redirectTo:function(){
    wx.redirectTo({
      url: './pageJump'
    })
  }
})