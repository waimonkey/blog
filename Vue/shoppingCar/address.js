new Vue({
  el:".container",
  data:{
    addressList:[],
    limitNumber: 3,
    correntIndex:0,
    shippingMethod:0
  },
  mounted:function () {
    this.$nextTick(function () {
      this.getAdressList()
    })
  },
  computed:{
    filterAddress:function () {
      return this.addressList.slice(0,this.limitNumber)
    }
  },

  methods:{
    getAdressList:function () {
      var that = this
      axios.get('./data/address.json')
      .then(function (res) {
        that.addressList = res.data.result
        console.log(that.addressList)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    loadMore:function () {
      this.limitNumber = this.addressList.length
    },
    setDefault:function (addressId) {
      this.addressList.forEach(function (address,index) {
        if(address.addressId == addressId) {
          address.isDefault = true
        }else {
          address.isDefault = false
        }
      })
    }
  }
})
