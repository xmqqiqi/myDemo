Page({
  setNaivgationBarTitle:function(e){
    console.log(e)
    var title=e.detail.value.title;
    wx.setNavigationBarTitle({
      title: title,
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
  }
})