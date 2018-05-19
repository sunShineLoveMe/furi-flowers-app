// pages/product/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: {
            id: 1,
            image: '/images/goods1.png',
            title: '新鲜梨花带雨',
            price: 0.01,
            stock: '有货',
            detail: '这里是梨花带雨详情。',
            parameter: '125g/个',
            service: '不支持退货'
        },
        num: 1,
        totalNum: 0,
        hasCarts: false,  /* 显示购物车总数 */
        curIndex: 0,
        show: false,
        scaleCart: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    addCount() {
        let num = this.data.num;
        num++;
        this.setData({
            num
        });
    },


    addToCart() {
        const that = this;
        const num = this.data.num;
        let total = this.data.totalNum;

        that.setData({
            show: true
        });

        setTimeout(function () {
            that.setData({
                show: false,
                scaleCart: true
            })
            setTimeout(function () {
                that.setData({
                    scaleCart: false,
                    hasCarts: true,
                    totalNum: num + total
                })
            }, 200)
        }, 300);
    },

    bindTap(e) {
        const index = parseInt(e.currentTarget.dataset.index);
        this.setData({
            curIndex: index
        });
    }

})