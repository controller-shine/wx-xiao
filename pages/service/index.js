//0引入 用来发送请求的 方法 一定要把路径补全
import{ request }from"../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    //轮播图数组
    swiperList:[],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    //新品数组
    serviceList:[],
  },
  //单选
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },

  //页面开始加载 就会触发
  onLoad: function (options) {
    //发送异步请求获取轮播图数据
    // wx.request({
    //   url: 'http://49.234.18.144/jx/public/api/ads?position=首页',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.data
    //     })
    //   }
    // });
      this.getSwiperList();
      this.getServiceList();
  },

  //获取轮播图数据
  getSwiperList(){
    request({ url:"http://49.234.18.144/jx/public/api/ads?position=服务"})
    .then(result => {
      this.setData({
        swiperList:result.data.data
      })
    })
  },
  //获取服务背景数据
  getServiceList(){
    request({ url:"http://49.234.18.144/jx/public/api/ads?name=服务背景"})
    .then(result => {
      this.setData({
        serviceList:result.data.data
      })
    })
  }
});
