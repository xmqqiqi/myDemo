Page({
  data: {
    array: [{
      text: "开发接口",
      children: [{
        text: '微信登录',
        desc:'login'
      }, {
        text: '获取用户信息',
        desc:'userInfo'
      }, {
        text: '发起支付',
        desc: 'pay'
      }, {
        text: '分享',
        desc: 'sharing'
      }, {
        text: '客服消息',
        desc:'customer-service'
      }, {
        text: '模板消息',
        desc: 'template-message'
      }]
    }, {
      text: "界面",
      children: [{
        text: '设置界面标题',
        desc: 'setTitle'
      }, {
        text: '标题栏加载动画',
        desc: 'titleLoading'
      }, {
        text: '页面跳转',
        desc: 'pageJump'
      }, {
        text: '下拉刷新',
        desc: 'pullDownRefresh'
      },{
        text: '创建动画'
      }, {
        text: '创建绘画'
      }, {
        text: '显示操作菜单'
      }, {
        text: '显示模态弹窗'
      }, {
        text: '显示消息提示框'
      }]
    }
    // , {
    //   text: "设备",
    //   children: [{
    //     text: '获取手机网络状态'
    //   }, {
    //     text: '获取手机系统信息'
    //   }, {
    //     text: '监听重力感应数据'
    //   }, {
    //     text: '监听罗盘数据'
    //   }, {
    //     text: '打电话'
    //   }, {
    //     text: '扫码'
    //   }]
    // }, {
    //   text: "网络",
    //   children: [{
    //     text: '发起一个请求'
    //   }, {
    //     text: 'WebSocket'
    //   }, {
    //     text: '上传文件'
    //   }, {
    //     text: '下载文件'
    //   }]
    // }, {
    //   text: "媒体",
    //   children: [{
    //     text: '图片'
    //   }, {
    //     text: '录音'
    //   }, {
    //     text: '背景音频'
    //   }, {
    //     text: '文件'
    //   }, {
    //     text: '视频'
    //   }]
    // }, {
    //   text: "位置",
    //   children: [{
    //     text: '获取当前位置'
    //   }, {
    //     text: '使用原生地图查看位置'
    //   }, {
    //     text: '使用原生地图选择位置'
    //   }]
    // }, {
    //   text: "数据"
    // }
    ],
    activeIndex: null
  },
  an: function (e) {
    console.log('an', e)
    if (e.target.dataset.index == this.data.activeIndex) {
      this.setData({
        activeIndex: null
      })
    } else {
      this.setData({
        activeIndex: e.target.dataset.index
      })
    }
    console.log(e.target.dataset.index)
  }
})