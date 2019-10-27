App({

  onLaunch: function(options) {
    console.log('小程序初始化完成 - onLaunch')
    console.log(options)
  },

  onShow: function(options) {
    console.log('小程序启动或从后台进入前台显示 - onShow')
    console.log(options)
  },

  onHide: function() {
    console.log('小程序隐藏 - onHide')
  },

  onError: function(error) {
    console.log('小程序发生脚本错误，或者API调用失败 - onError')
    console.log(error)
  },

  onPageNotFound: function(options) {
    console.log('小程序要打开的页面不存在 - onPageNotFound')
    console.log(options)
  }

})