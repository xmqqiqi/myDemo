var order = ['green', 'red', 'yellow', 'green'];
Page({
  data:{
    toView: 'red',
    scrollTop: 100
  },
  upper:function(e){
    console.log("upper",e);
  },
  lower:function(e){
    console.log("lower",e);
  },
  scroll:function(e){
    console.log("scroll",e);
  },
  tap:function(e){
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove:function(e){
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})