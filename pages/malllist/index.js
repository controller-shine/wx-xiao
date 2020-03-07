Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },

  //页面开始加载 就会触发
  onLoad: function (options) {
    //发送异步请求获取轮播图数据
    wx.request({
      url: 'http://49.234.18.144/jx/public/api/ads?position=商城',
      success: (result) => {
        this.setData({
          swiperList:result.data.data
        })
      }
    });
  },
});
