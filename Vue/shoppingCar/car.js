var vm = new Vue({
  el: '#app',
  data: {
    productList: [],
    totalMoney: 0,
    totalPrice:0,
    checkAllFlag: false,
    derFlag:false,
    carProduct:''
  },
  filters: {
    formatMoney: function (value,option) {
      return "$" + value.toFixed(2) + option;
    }
  },
  //实例化创建完成之后
  mounted: function () {
    this.catView()
  },
  methods: {
    catView: function () {
      var that = this;
      axios.get("data/cartData.json")
        .then(function (res) {
          that.productList = res.data.result.list;
          that.totalMoney = res.data.result.totalMoney
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    changeMoney: function (product, way) {
      if (way > 0) {
        product.productQuantity++
      } else {
        product.productQuantity--
          product.productQuantity = product.productQuantity < 1 ? 1 : product.productQuantity--;
      }
      this.calTotalPrice()
    },
    selectedProduct: function (product) {
      if (typeof product.checked == 'undefined') {
        // Vue.set(product,'checked',true) // 添加全局变量
        this.$set(product, "checked", true) //添加局部变量
      } else {
        product.checked = !product.checked
      }
      this.calTotalPrice()
    },
    checKall: function (flag) {
      this.checkAllFlag = flag
      var that = this
       this.productList.forEach(function (product, index) {
          if (typeof product.checked == 'undefined') {
            that.$set(product, "checked", that.checkAllFlag) //添加局部变量
          } else {
            product.checked = that.checkAllFlag
          }
        })
     this.calTotalPrice()
    },
    calTotalPrice:function () {
      var that = this
      that.totalPrice = 0;
       this.productList.forEach(function (product, index){
        if(product.checked == true) {
          that.totalPrice += product.productPrice * product.productQuantity
        }
       })
    },
    delConfirm:function (product) {
      this.derFlag = true;
      this.carProduct = product;
    },
    delProduct:function () {
      var index = this.productList.indexOf(this.carProduct)
      this.productList.splice(index,1)
      this.derFlag = false;
    }
  }
})
