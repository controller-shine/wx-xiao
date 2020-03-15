//0引入 用来发送请求的 方法 一定要把路径补全
import{ request }from"../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    productList:[],
  },

  //页面开始加载 就会触发
  onLoad: function (options) {
      this.getSwiperList();
      this.getProductList();
  },

  //获取轮播图数据
  getSwiperList(){
    request({ url:"/api/ads?position=首页"})
    .then(result => {
      this.setData({
        swiperList:result.data.data
      })
    })
  },
  //获取新品数据
  getProductList(){
    request({ url:"/api/products?limit=4"})
    .then(result => {
      this.setData({
        productList:result.data.data
      })
    })
  },
});
