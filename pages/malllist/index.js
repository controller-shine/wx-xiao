//0引入 用来发送请求的 方法 一定要把路径补全
import {
  request
} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList: [],
    //服务背景数组
    serviceList: [],
    //分类数组
    cateList: [],
    //分类数组
    productList: [],
    //轮播图
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    //被点击菜单
    currentIndex: 0,
    cid:1,
    // 默认不显示插件
    isShow: false,
    themeColor: '#ffd00a',
    calendarType: 'yydate',
    //下拉
    picker: ['打包机', '鳄鱼剪切机', '废纸打包机', '龙门剪切机', '其他设备'],
  },
  //分类接口返回值
  Cates: [],
  Product: [],
  //页面开始加载 就会触发
  onLoad: function (options) {
    this.getSwiperList();
    this.getServiceList();
    this.getCateList();
  },


  //获取轮播图数据
  getSwiperList() {
    request({
        url: "/api/ads?position=商城"
      })
      .then(res => {
        this.setData({
          swiperList: res.data.data
        })
      })
  },

  //获取分类数据
  getCateList() {
    request({
        url: "/api/cates"
      })
      .then(res => {
        this.Cates = res.data.data;
        let cateList = this.Cates;
        this.setData({
          cateList
        })
      })
  },

  //点击分类
  handleItemTap(e) {
    //获取被点击的索引
    console.log(e);
    var id = e.currentTarget.dataset.id;
    const {index} = e.currentTarget.dataset;
    this.setData({
      currentIndex: index,
      cid: id
    })
    request({
        url: "/api/products?cid=" + id,
      })
      .then(res => {
        this.Product = res.data.data;
        let productList = this.Product;
        this.setData({
          productList
        })
      })
  },
  //获取服务背景数据
  getServiceList() {
    request({
        url: "/api/ads?name=服务背景"
      })
      .then(res => {
        this.setData({
          serviceList: res.data.data
        })
      })
  },


  //产品类型
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

});