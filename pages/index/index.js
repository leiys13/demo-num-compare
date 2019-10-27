Page({

  /**
   * 页面初始化数据
   */
  data: {
    result: ''
  },

  /**
   * 生命周期函数 -- 监听页面加载
   */
  onLoad: function(options) {
    console.log('页面加载')
  },

  /**
   * 生命周期函数 -- 监听页面初次渲染完成
   */
  onReady: function() {
    console.log('页面初次渲染完成')
  },

  /**
   * 生命周期函数 -- 监听页面显示
   */
  onShow: function() {
    console.log('页面显示')
  },


  /**
   * 以下为自定义属性和函数
   */
  num1: 0,
  num2: 0,
  num1change: function (e) {
    this.num1 = Number(e.detail.value)
    console.log('第一个数字为：' + this.num1)
  },
  num2change: function (e) {
    this.num2 = Number(e.detail.value)
    console.log('第二个数字为：' + this.num2)
  },
  compare: function(e) {
    console.log('比较按钮被点击了...')
    console.log(e)
    var str = '两数相等'
    if(this.num1 > this.num2) {
      str = '第一个数字大'
    } else if(this.num1 < this.num2) {
      str = '第二个数字大'
    }
    this.setData({result: str})
  }

})