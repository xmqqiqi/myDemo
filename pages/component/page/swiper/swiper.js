Page({
  data:{
    imgUrls: ["../../../../images/img01.jpg", "../../../../images/img02.jpg", "../../../../images/img03.jpg"],
    indicatorDots:true,
    autoplay:false,
    duration:500,
    interval:2000
  },
  swiperChange:function(e){
    console.log(e)
  },
  indicatorDotsChange:function(e){
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  autoplayChange:function(e){
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  durationCahnge:function(e){
    console.log("durationCahnge",e)
    this.setData({
      duration:e.detail.value
    })
  },
  intervalCahnge: function (e) {
    console.log("durationCahnge", e)
    this.setData({
      interval: e.detail.value
    })
  }
})