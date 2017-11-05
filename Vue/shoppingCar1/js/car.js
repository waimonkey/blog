new Vue({
  el:'.container',
  data:{
    productList:[]
  },
  mounted:function () {
    this.$nextTick(function () {
      this.getproductList()
    })
  },
  filters:{

  },
  methods:{
    //获取商品列表
    getproductList:function () {
      axios.get("data/cartData.json")
      .then(function (res) {
        console.log(res)
        this.productList = res.data.result.list;
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
})
