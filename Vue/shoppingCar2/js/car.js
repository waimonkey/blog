new Vue({
  el:'#app',
  data:{
    productList:[],
    checkAllFlag:false,
    totalMoney:0,
    delFlag:false,
    delProductInfo:''
  },
  mounted:function () {
     this.$nextTick(function () {
      this.getPeoductList()
    })
  },
  filters:{
    formatMoney:function (value,option) {
      return '$' + value + option
    }
  },
  methods:{
    getPeoductList:function () {
      var that = this
      axios.get('data/cartData.json')
      .then(function (res) {
        that.productList = res.data.result.list
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    changeMoney:function (product,way) {
      if(way < 0) {
        product.productQuantity--
         product.productQuantity =  product.productQuantity < 1? 1 :  product.productQuantity
      }else {
        product.productQuantity++
      }
      this.calTotalMoney()
    },
    productCheck:function (product) {
        if(typeof product.check == 'undefined'){
          this.$set(product,'check',true)
        }else{
          product.check = !product.check
        }
        this.calTotalMoney()
    },
    checkAll:function (flag) {
      var that = this
      that.checkAllFlag = flag
      this.productList.forEach(function (product,index) {
         if(typeof product.check == 'undefined'){
          that.$set(product,'check',that.checkAllFlag)
        }else{
          product.check = that.checkAllFlag
        }
      })
      this.calTotalMoney()
    },
    calTotalMoney:function () {
      var that = this
      that.totalMoney = 0;
       this.productList.forEach(function (product,index) {
        if(product.check) {
          that.totalMoney += product.productPrice * product.productQuantity
        }
      })
    },
    delProduct:function (product) {
      this.delFlag = true;
      this.delProductInfo = product
    },
    sureDelProduct:function () {
      var index = this.productList.indexOf(this.delProductInfo)
      this.productList.splice(index,1)
      this.delFlag = false;

    }
  }
   
  
})
