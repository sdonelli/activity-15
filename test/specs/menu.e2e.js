const LoginPage = require('../pageobjects/login.page');
const MenuPage = require('../pageobjects/menu.page');

describe('Menu application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open About', async () => {
        await MenuPage.open();
        await MenuPage.goAbout();
       
        await expect(browser).toHaveUrl('https://saucelabs.com/');
    }); 

    it('should logout', async () => {
        await MenuPage.open();
        await MenuPage.goLogout();
       
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(LoginPage.inputUsername).toBePresent();
        await expect(LoginPage.inputPassword).toBePresent();
    }); 

    it('should change the color when executing mouse over event', async () => {
        await MenuPage.open();
        await MenuPage.selectAbout();
        
        const colorProperty = await (await MenuPage.aboutOption).getCSSProperty('color');
        const expectedValue = {
            property: 'color',
            value: 'rgba(226,35,26,1)',
            parsed: {
                hex: '#e2231a',
                alpha: 1,
                type: 'color',
                rgba: 'rgba(226,35,26,1)'
            }
        };
        await expect(colorProperty).toMatchObject(expectedValue);
    });

});
