const Page = require('./page');

class CartPage extends Page {

    get btnCheckout () { return $('#checkout') }
    get btnContinueShopping () { return $('#continue-shopping') }
    get cartItems () { return $$('.cart_item') }
    get cartItemsDescription () { return $$('.inventory_item_desc') }
    get btnRemoves () { return $$('.btn.btn_secondary.btn_small.cart_button') }
    get removedItems () { return $$('.removed_cart_item') }

    async removeItem (position) {
        let elementOnPosition = await (await this.btnRemoves)[position];
        await elementOnPosition.click();       
    }

    async getCartItem (position) {
        let elementOnPosition = await (await this.cartItems)[position];
        return elementOnPosition;       
    }

    async getCartItemDescription (position) {
        let descriptionOnPosition = await (await this.cartItemsDescription)[position];
        return descriptionOnPosition.getText();  
    }

    async goCheckout() {
        await (await this.btnCheckout).click();
    }

    async goContinueShopping() {
        await (await this.btnContinueShopping).click();
    }

    async clean() {
        let itemsToBeRemove = await this.btnRemoves;
        for (let item of itemsToBeRemove) {
            await item.click();        
        }
    }

}

module.exports = new CartPage();
