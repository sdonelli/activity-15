const Page = require('./page');

class CheckoutCompletePage extends Page {

    get btnBackHome () { return $('#back-to-products') }
    get outputCompleteHeader () { return $('.complete-header') }
    get outputCompleteText () { return $('.complete-text') }
    get outputPonyExpress () { return $('.pony_express') }   

    async backHome() {
        await (await this.btnBackHome).click();
    }

}

module.exports = new CheckoutCompletePage();
