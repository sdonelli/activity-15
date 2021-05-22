const LoginPage = require('../pageobjects/login.page');
const HeaderPage = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutInformationPage = require('../pageobjects/checkout-information.page');

describe('Checkout Information application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HeaderPage.openShoppingCard();
        await CartPage.goCheckout();
    });

    it('should cancel checkout', async () => {
        await CheckoutInformationPage.cancel();

        await expect(browser).toHaveUrlContaining('cart.html');
    }); 

    it('should return error message when input fields are empty', async () => {
        await CheckoutInformationPage.checkout('', '', '');

        await expect(browser).toHaveUrlContaining('checkout-step-one.html');
        await expect(await CheckoutInformationPage.inputErrorIcons).toHaveLength(3);
        await expect(await CheckoutInformationPage.outputErrorMessage).toHaveTextContaining('Error: First Name is required');
    });

    it('should return error message when first name is empty', async () => {
        await CheckoutInformationPage.checkout('', 'Doe', '2000');

        await expect(browser).toHaveUrlContaining('checkout-step-one.html');
        await expect(await CheckoutInformationPage.inputErrorIcons).toHaveLength(3);
        await expect(await CheckoutInformationPage.outputErrorMessage).toHaveTextContaining('Error: First Name is required');
    });

    it('should return error message when last name is empty', async () => {
        await CheckoutInformationPage.checkout('Joe', '', '2000');

        await expect(browser).toHaveUrlContaining('checkout-step-one.html');
        await expect(await CheckoutInformationPage.inputErrorIcons).toHaveLength(3);
        await expect(await CheckoutInformationPage.outputErrorMessage).toHaveTextContaining('Error: Last Name is required');
    });

    it('should return error message when postal code is empty', async () => {
        await CheckoutInformationPage.checkout('Joe', 'Doe', '');

        await expect(browser).toHaveUrlContaining('checkout-step-one.html');
        await expect(await CheckoutInformationPage.inputErrorIcons).toHaveLength(3);
        await expect(await CheckoutInformationPage.outputErrorMessage).toHaveTextContaining('Error: Postal Code is required');
    });

    it('should go to checkout overview when input fields are right', async () => {
        await CheckoutInformationPage.checkout('Joe', 'Doe', '2000');

        await expect(browser).toHaveUrlContaining('checkout-step-two.html');
    });

});
