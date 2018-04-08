const vue = new Vue({
    el: '#app',
    data: {
        brand: "Dan's shop",
        product: 'Socks',
        image: 'images/socks.jpg',
        altText: 'green socks',
        inventory: 15,
        details: ["80% cotton", "20% polyester", "gender-neutral"],
        variants: [{
            variantId: 2234,
            variantColor: 'green',
            variantColorCode: 'rgb(18, 249, 153)',
            variantImage: 'images/greenSocks.jpg',
        },{
            variantId: 2235,
            variantColor: "blue",
            variantColorCode: 'rgb(0, 149, 255)',
            variantImage: 'images/blueSocks.jpg',
        }],
        cart: 0
    },
    methods: {
        addToCart: function() {
            if(this.inventory > 0) {
                this.cart += 1
                this.inventory -= 1
            }
        },

        removeFromCart: function() {
            if (this.cart > 0) {
                this.cart -= 1
                this.inventory += 1
            }
        },

        updateProduct: function(img) {
            this.image = img
        },
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})