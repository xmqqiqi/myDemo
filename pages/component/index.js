Page({
  data:{
    array:[{
      text:"视图容器",
      children:[{
        text:'view'
      }, {
        text: 'scroll-view'
      }, {
        text: 'swiper'
      }, {
        text: 'movable-view'
      }, {
        text: 'cover-view'
      }]
    }, {
      text: "基础内容",
      children: [{
        text: 'text'
      }, {
        text: 'icon'
      }, {
        text: 'progress'
      }, {
        text: 'rich-text'
      }]
    }
    , {
      text: "表单组件",
      children: [{
        text: 'button'
      }, {
        text: 'checkbox'
      }, {
        text: 'form'
      }, {
        text: 'input'
      }, {
        text: 'label'
      }, {
        text: 'picker'
      }, {
        text: 'radio'
      }, {
        text: 'slider'
      }, {
        text: 'switch'
      }, {
        text: 'textarea'
      }]
    }
    ],
    activeIndex:null
  },
  an:function(e){
    console.log('an',e)
    if (e.target.dataset.index==this.data.activeIndex){
      this.setData({
        activeIndex: null
      })
    }else{
      this.setData({
        activeIndex: e.target.dataset.index
      })
    }
    console.log(e.target.dataset.index)
  }
})