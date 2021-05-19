const Page = require('./page');

class HeaderPage extends Page {

    get shoppingCardLink () { return $('.shopping_cart_link') }

    async openShoppingCard() {
        await (await this.shoppingCardLink).click();
    }

}

module.exports = new HeaderPage();
