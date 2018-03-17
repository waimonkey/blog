new Vue({
  el: '#app',
  data: {
    productList: [],
    checkFlag: false,
    totalMoney: 0,
    delFlag: false,
    delPro: ''
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getproductList()
    })
  },
  filters: {
    formatMoney: function (price, way) {
      return "$" + price + way
    }
  },
  methods: {
    //获取商品列表
    getproductList: function () {
      var that = this
      axios.get("data/cartData.json")
        .then(function (res) {
          that.productList = res.data.result.list;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    productQuantityNumber: function (product, num) {
      if (num < 0) {
        product.productQuantity--
          product.productQuantity = product.productQuantity < 1 ? 1 : product.productQuantity
      } else {
        product.productQuantity++
      }
      this.calTotalMoney()
    },
    chenckProduct: function (product) {
      if (typeof product.check === 'undefined') {
        this.$set(product, 'check', true)
      } else {
        product.check = !product.check
      }
      this.calTotalMoney()
    },
    checkAll: function (flag) {
      this.checkFlag = flag;
      var that = this
      this.productList.forEach(function (product, index) {
        if (typeof product.check === 'undefined') {
          that.$set(product, 'check', that.checkFlag)
        } else {
          product.check = that.checkFlag
        }
      })
      this.calTotalMoney()
    },
    calTotalMoney: function () {
      var that = this;
      that.totalMoney = 0;
      this.productList.forEach(function (product, index) {
        if (product.check == true) {
          that.totalMoney += product.productQuantity * product.productPrice
        }
      })
    },
    delConfirm: function (product) {
      this.delFlag = true
      this.delPro = product
    },
    delProduct: function () {
      var index = this.productList.indexOf(this.delPro)
      this.productList.splice(index, 1)
      this.delFlag = false

    }

  }
})
