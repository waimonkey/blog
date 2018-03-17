new Vue({
  el: '.container',
  data: {
    addressList: [],
    num: 3,
    currentIndex: 0,
    shippingMethod:0
  },
  mounted: function () {
    this.$nextTick(function () {
      this.getAddress()
    })
  },
  computed: {
    limitAddress:function () {
      return this.addressList.slice(0,this.num)
    }
  },
  methods: {
    getAddress: function () {
      var that = this
      axios.get('data/address.json')
        .then(function (res) {
          that.addressList = res.data.result
        })
        .catch(function (error) {
          console.log(error)
        })
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
