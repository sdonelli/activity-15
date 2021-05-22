const LoginPage = require('../pageobjects/login.page');
const HeaderPage = require('../pageobjects/header.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutInformationPage = require('../pageobjects/checkout-information.page');
const CheckoutOverviewPage = require('../pageobjects/checkout-overview.page');
const CheckoutCompletePage = require('../pageobjects/checkout-complete.page');

describe('Checkout Overview application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HeaderPage.openShoppingCard();
        await CartPage.goCheckout();
        await CheckoutInformationPage.checkout('Joe', 'Doe', '2000');
    });

    it('should cancel checkout', async () => {
        await CheckoutOverviewPage.cancel();

        await expect(browser).toHaveUrlContaining('inventory.html');
    }); 

    it('should finish checkout', async () => {
        await CheckoutOverviewPage.finish();

        await expect(browser).toHaveUrlContaining('checkout-complete.html');
        await expect(await CheckoutCompletePage.outputCompleteHeader).toHaveTextContaining('THANK YOU FOR YOUR ORDER');
        await expect(await CheckoutCompletePage.outputCompleteText).toHaveTextContaining('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(await CheckoutCompletePage.outputPonyExpress).toBePresent();
        await expect(await CheckoutCompletePage.outputPonyExpress).toHaveElementProperty('alt', 'Pony Express');
    }); 

});
