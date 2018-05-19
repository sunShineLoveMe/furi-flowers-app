Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],  // 购物车列表
    hasList: false, //列表是否有数据
    totalPrice: 0, // 总价， 初始为0,
    selectAllStatus: true, // 全选状态，默认全选
    obj: {
        name: "hello"
    } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
        hasList: true,
        carts: [
            { 
                id:1, 
                title:'新鲜芹菜 半斤', 
                image: '/images/s5.png',
                num: 4,
                price: 0.01,
                selected: true
            },
            {
                id: 2,
                title: '粟米 500g',
                image: '/images/s6.png',
                num: 1,
                price: 0.03,
                selected: true
            }
        ]
    });
    this.getTotalPrice();
  },

  /**
   * * 当前商品选中事件 
   */
  selectList(e) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      const selected = carts[index].selected;
      carts[index].selected = !selected;
      this.setData({
          carts: carts
      });
      this.getTotalPrice();
  },

  /**
   * 计算总价 
   */  
  getTotalPrice() {
     let carts =  this.data.carts; // 获取购物车列表
     let total = 0;
     for (let i = 0; i < carts.length; i++) {
         if (carts[i].selected) {
             total += carts[i].num * carts[i].price;  // 所有价格加起来 
        }
     }

     this.setData({
         carts: carts,
         totalPrice: total.toFixed(2)
     });
  },

  /**
   * 绑定减数量
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <=1){
        return false;
    }
    num = num-1;
    carts[index].num = num;
    this.setData({
        carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 增加绑定数量
   */
  addCount(e) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      let num = carts[index].num;
      num = num + 1;
      carts[index].num = num;
      this.setData({
          carts: carts
      });
      this.getTotalPrice();
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
      let selectAllStatus = this.data.selectAllStatus;
      selectAllStatus = !selectAllStatus;
      let carts = this.data.carts;

      for(let i=0; i<carts.length; i++) {
          carts[i].selected = selectAllStatus;
      }
      this.setData({
          selectAllStatus: selectAllStatus,
          carts: carts
      });
      this.getTotalPrice();
  },

  /**
   * 删除购物车当前商品
   */
  deleteList(e) {
      const index = e.currentTarget.dataset.index;
      let carts = this.data.carts;
      carts.splice(index, 1);
      this.setData({
          carts
      });
      if(!carts.length) {
        this.setData({
            hasList: false
        });
      }else {
          this.getTotalPrice();
      }
  }

})