const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            // url: 'www.telegraaf.nl',
            inStock: false,
            // inventory: 11,
            // onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
                ],
            sizes: ['S', 'M','L']
        }
    },
        methods: {
            addToCart() {
                this.cart += 1
        },
            lessInCart() {
                if (this.cart >0) {
                    this.cart -=1
                }
            },
        updateImage(variantImage) {
                this.image = variantImage
        },
    }
})
