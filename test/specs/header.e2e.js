const LoginPage = require('../pageobjects/login.page');
const HeaderPage = require('../pageobjects/header.page');

describe('Header application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open shopping card', async () => {
        await HeaderPage.openShoppingCard();

        await expect(browser).toHaveUrlContaining('cart.html');
    }); 

});
