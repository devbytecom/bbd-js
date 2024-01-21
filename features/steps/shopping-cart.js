const { When, Then, Before, After } = require('cucumber');
const ShoppingCart = require('../../src/shoppingCart.js');

Before(function () {
    this.shoppingCart = new ShoppingCart();
});

After(function() {
    this.shoppingCart = null;
});

When('we add the following items into the cart', function (dataTable, callback) {
    // Write code here that turns the phrase above into concrete actions

    for(let index = 0; index < dataTable.rawTable.length; index++) {
        for(let productIndex = 0; productIndex < dataTable.rawTable[index].length; productIndex++) {
            this.shoppingCart.add(dataTable.rawTable[index][productIndex]);
        }
    }
    
    callback();
});

Then('we should have the total as {float}', function (expectedTotal, callback) {
    // Write code here that turns the phrase above into concrete actions

    const cartTotal = this.shoppingCart.total();

    if(cartTotal === expectedTotal) {
        callback();
    } else {
        callback(new Error('Not matched expected total'))
    }
});