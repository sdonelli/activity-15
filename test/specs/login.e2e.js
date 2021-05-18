const LoginPage = require('../pageobjects/login.page');

describe('Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(browser).toHaveTitle('Swag Labs');
        await expect(browser).toHaveUrlContaining('inventory.html');
    });

    it('should return error message when login with empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');

        await expect(LoginPage.outputError).toHaveTextContaining('Username is required');
    });

    it('should return error message when login with valid user and invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '123456');

        await expect(LoginPage.outputError).toHaveTextContaining('Username and password do not match any user in this service');
    });

    it('should return error message when login with invald user and valid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard', 'secret_sauce');

        await expect(LoginPage.outputError).toHaveTextContaining('Username and password do not match any user in this service');
    });

    it('should return error message when login with locked user', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');

        await expect(LoginPage.outputError).toHaveTextContaining('Sorry, this user has been locked out.');
    });

    it('should return error message when login without password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '');

        await expect(LoginPage.outputError).toHaveTextContaining('Password is required');
    });

    it('should return error message when login without user', async () => {
        await LoginPage.open();
        await LoginPage.login('', 'secret_sauce');

        await expect(LoginPage.outputError).toHaveTextContaining('Username is required');
    });
});
