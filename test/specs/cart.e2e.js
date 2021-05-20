const LoginPage = require('../pageobjects/login.page');
const HeaderPage = require('../pageobjects/header.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');

describe('Cart application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HeaderPage.openShoppingCard();
    });

    afterEach(async () => {
        await CartPage.clean();
    });

    it('should open checkout', async () => {
        await CartPage.goCheckout();

        await expect(browser).toHaveUrlContaining('checkout-step-one.html');
    }); 

    it('should open inventory', async () => {
        await CartPage.goContinueShopping();

        await expect(browser).toHaveUrlContaining('inventory.html');
    }); 

    it('should display the element added to the cart', async () => {
        await CartPage.goContinueShopping();
        await InventoryPage.addElement(0);
        await HeaderPage.openShoppingCard();

        let elementDescriptionOnCart = await CartPage.getCartItemDescription(0);
        let elementDescriptionOnInventory = await InventoryPage.getItemDescription(0);
        await expect(elementDescriptionOnCart).toStrictEqual(elementDescriptionOnInventory);
        await expect(await CartPage.cartItems).toHaveLength(1);
        await expect(browser).toHaveUrlContaining('cart.html');
    }); 

    it('should remove the element added to the cart', async () => {
        await CartPage.goContinueShopping();
        await InventoryPage.addElement(0);
        await HeaderPage.openShoppingCard();
        await CartPage.removeItem(0);

        await expect(await CartPage.cartItems).toHaveLength(0);
        await expect(await CartPage.removedItems).toHaveLength(1);
        await expect(browser).toHaveUrlContaining('cart.html');
    }); 

});
