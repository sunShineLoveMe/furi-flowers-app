Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onFlowerTap: function(event) {
    // console.log(event);
    wx.switchTab({
        url: "/pages/product/index/index"
    });
  }



})