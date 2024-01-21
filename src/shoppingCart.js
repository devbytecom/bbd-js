const products = require('./products');

class ShoppingCart {
   constructor() {
       this.items = [];
   }
   
   add(sku) {
        const product = products.find(p => p.sku == sku);

        if(product) {
            this.items.push(product);
        } else {
            throw "Product not found!";
        }
    }

    total() {
        return this.items.reduce((acc, product) => acc + product.price, 0);
    } 
}

module.exports = ShoppingCart;