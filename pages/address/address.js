// pages/address/address.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {
            name: '',
            phone: '',
            detail: ''
        }
    },

    onLoad() {
        var that = this;
        wx.getStorage({
            key: 'address',
            success: function(res) {
                that.setData({
                    address: res.data
                });
            },
        })
    },

    formSubmit(e) {
        const value = e.detail.value;
        if (value.name && value.phone && value.detail) {
            wx.setStorage({
                key: 'address',
                data: value,
                success() {
                    wx.navigateBack();
                }
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '请填写完整资料',
                showCancel: false
            })
        }
    }

})