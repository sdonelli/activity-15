const LoginPage = require('../pageobjects/login.page');
const FooterPage = require('../pageobjects/footer.page');

describe('Footer application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open Facebook', async () => {
        await FooterPage.goFacebook();

        await browser.switchWindow('https://www.facebook.com/saucelabs');
        await expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
    });

    it('should open Twitter', async () => {
        await FooterPage.goTwitter();

        await browser.switchWindow('https://twitter.com/saucelabs');
        await expect(browser).toHaveUrl('https://twitter.com/saucelabs');
    });

    it('should open LinkedIn', async () => {
        await FooterPage.goLinkedIn();

        await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/');
        await expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');
    });

});
