const Page = require('./page');

class InventoryItemPage extends Page {

    get btnBackToProducts () { return $('#back-to-products') }
    get itemName () { return $('.inventory_details_name.large_size') }
    get itemDescription () { return $('.inventory_details_desc.large_size') }
    get itemPrice () { return $('.inventory_details_price') }
    get itemImg() { return $('.inventory_details_img_container > img') }
    get btnAddToCart () { return $('.btn.btn_primary.btn_small.btn_inventory') }
    get btnRemove () { return $('.btn.btn_secondary.btn_small.btn_inventory') }

    async backToProducts() {
        await (await this.btnBackToProducts).click();
    }

    async getItemName() {
        return (await this.itemName).getText();
    }

    async getItemPrice() {
        return (await this.itemPrice).innerText;
    }

    async getItemDescription() {
        return await (await this.itemDescription).getText();
    }

    async addToCart() {
        await (await this.btnAddToCart).click();
    }

}

module.exports = new InventoryItemPage();
