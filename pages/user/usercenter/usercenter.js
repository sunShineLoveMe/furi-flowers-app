// pages/user/usercenter/usercenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: "",
    nickname: "",
    orders:[],
    hasAddress: false,
    address: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
        success: function(res) {
            that.setData({
                thumb: res.userInfo.avatarUrl,
                nickname: res.userInfo.nickName
            });
        }
    }),
    wx.request({
        url: 'http://www.gdfengshuo.com/api/wx/orders.txt',
        success(res){
            that.setData({
                orders: res.data
            });
        }
    })
  },
  
  onShow() {
      var that = this;
      wx.getStorage({
          key: 'address',
          success: function(res) {
              that.setData({
                  hasAddress: true,
                  address: res.data
              });
          },
      })
  },
  /**
   * 发起支付请求
   */

  payOrders() {
      wx.requestPayment({
          timeStamp: '',
          nonceStr: '',
          package: '',
          signType: '',
          paySign: '',
          success: function(res){
            console.log(res);
          },
          fail: function() {
              wx.showModal({
                  title: '支付提示',
                  content: '微信支付暂时不支持!',
                  showCancel: false
              })
          }
      })
  }
})