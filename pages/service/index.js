//0引入 用来发送请求的 方法 一定要把路径补全
import {
  request
} from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    //轮播图数组
    swiperList: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    //新品数组
    serviceList: [],
    isShow: false, // 默认不显示插件
    themeColor: '#ffd00a',
    calendarType: 'yydate',
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    fileList: [{
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      name: '图片1'
    }, ]
  },
  //单选
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },
  
  // 页面开始加载 就会触发
  onLoad: function (options) {
    this.getSwiperList();
    this.getServiceList();
  },

  //获取轮播图数据
  getSwiperList() {
    request({
        url: "/api/ads?position=服务"
      })
      .then(result => {
        this.setData({
          swiperList: result.data.data
        })
      })
  },

  //获取服务背景数据
  getServiceList() {
    request({
        url: "/api/ads?name=服务背景"
      })
      .then(result => {
        this.setData({
          serviceList: result.data.data
        })
      })
  },

  //服务地址跳转
  weizhi() {
    wx.navigateTo({
      url: '/pages/map/index',
    })
  },

  //预约时间插件
  // 点击显示插件
  btnClick: function () {
    this.setData({
      isShow: true,
    })
  },
  btnClicks: function () {
    this.setData({
      isShow: true,
    })
  },

  _yybindchange: function (e) {
    var data = e.detail
    console.log(data)
  },

  _yybindhide: function () {
    console.log('隐藏')
  },

  //产品类型

  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

  //图片上传
  afterRead(event) {
    const {
      file
    } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        // 上传完成需要更新 fileList
        const {
          fileList = []
        } = this.data;
        fileList.push({
          ...file,
          url: res.data
        });
        this.setData({
          fileList
        });
      }
    });
  },

  //
  

  //表单提交按钮
  formSubmit: function (e) {
    console.log('提交表单，携带数据为：', e.detail.value)
    this.setData({
      allValue: e.detail.value
    })
  },

});
