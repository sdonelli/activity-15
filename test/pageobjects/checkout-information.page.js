const Page = require('./page');

class CheckoutInformationPage extends Page {

    get btnCancel () { return $('#cancel') }
    get btnContinue () { return $('#continue') }
    get inputErrorIcons () { return $$('.input_error.form_input.error') }
    get inputFirstName () { return $('#first-name') }
    get inputLastName() { return $('#last-name') }
    get inputPostalCode() { return $('#postal-code') }
    get outputErrorMessage() { return $('.error-message-container.error > h3') }

    async cancel() {
        await (await this.btnCancel).click();
    }

    async checkout(firstName, lastName, postalCode) {
        await (await this.inputFirstName).setValue(firstName);
        await (await this.inputLastName).setValue(lastName);
        await (await this.inputPostalCode).setValue(postalCode);
        await (await this.btnContinue).click();
    }

}

module.exports = new CheckoutInformationPage();
