const app = Vue.createApp({
    data: function () {
        return {
            cart:0,
            premium: true,
            details: [1, 2, 3]
           
        }
    },
    methods: { 
        updateCart() {
            this.cart += 1
        },
        removeCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
      },
   
})
