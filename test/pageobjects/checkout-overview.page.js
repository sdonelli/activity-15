const Page = require('./page');

class CheckoutOverviewPage extends Page {

    get btnCancel () { return $('#cancel') }
    get btnFinish () { return $('#finish') }

    async cancel() {
        await (await this.btnCancel).click();
    }

    async finish() {
        await (await this.btnFinish).click();
    }

}

module.exports = new CheckoutOverviewPage();
