const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const InventoryItemPage = require('../pageobjects/inventory-item.page');

describe('Inventory Item application', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should back to inventory', async () => {
        await InventoryPage.clickOnItemImage(0);
        await InventoryItemPage.backToProducts();

        await expect(browser).toHaveUrlContaining('inventory.html');
    }); 

    it('should display item information', async () => {
        const itemSelected = 1;
        let itemNameOnInventory = await InventoryPage.getItemName(itemSelected);
        let itemDescOnInventory = await InventoryPage.getItemDescription(itemSelected);
        let itemPriceOnInventory = await InventoryPage.getItemPrice(itemSelected);
        let itemImageOnInventory = await InventoryPage.getItemImage(itemSelected);
        let itemImageAltOnInventory = await itemImageOnInventory.getAttribute('alt');
        let itemImageSrcOnInventory = await itemImageOnInventory.getAttribute('src');

        await InventoryPage.clickOnItemImage(itemSelected);
        
        let itemImage = await InventoryItemPage.itemImg;
        await expect(itemImage).toHaveElementProperty('alt', itemImageAltOnInventory);
        await expect(itemImage).toHaveElementProperty('src', itemImageSrcOnInventory);
        await expect(await InventoryItemPage.getItemPrice()).toStrictEqual(itemPriceOnInventory);
        await expect(await InventoryItemPage.getItemName()).toStrictEqual(itemNameOnInventory); 
        await expect(await InventoryItemPage.getItemDescription()).toStrictEqual(itemDescOnInventory);    
        await expect(await InventoryItemPage.btnAddToCart).toBePresent();      
        await expect(browser).toHaveUrlContaining('inventory-item.html');
    }); 

    it('should add item to cart', async () => {
        await InventoryPage.clickOnItemImage(1);
        await InventoryItemPage.addToCart();
         
        await expect(await InventoryItemPage.btnRemove).toBePresent();  
        await expect(await InventoryItemPage.btnRemove).toHaveText('REMOVE');      
        await expect(browser).toHaveUrlContaining('inventory-item.html');
    });  

});
