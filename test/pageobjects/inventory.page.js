const Page = require('./page');

class InventoryPage extends Page {

    get btnAdds () { return $$('.btn.btn_primary.btn_small.btn_inventory') }
    get itemsName () { return $$('.inventory_item_name') }
    get itemsDescription () { return $$('.inventory_item_desc') }
    get itemsImage () { return $$('img.inventory_item_img') }
    get itemsPrice () { return $$('.pricebar > div') }

    async addElement (position) {
        let elementOnPosition = await (await this.btnAdds)[position];
        await (elementOnPosition).click();       
    }

    async getItemName (position) {
        let nameOnPosition = await (await this.itemsName)[position];
        return nameOnPosition.getText();       
    }

    async getItemDescription (position) {
        let descriptionOnPosition = await (await this.itemsDescription)[position];
        return descriptionOnPosition.getText();       
    }

    async getItemPrice (position) {
        let priceOnPosition = await (await this.itemsPrice)[position];
        return priceOnPosition.innerText;       
    }

    async getItemImage (position) {
        let itemImageOnPosition = await (await this.itemsImage)[position];
        return itemImageOnPosition;        
    }

    async clickOnItemImage (position) {
        let imgOnPosition = await (await this.itemsImage)[position];
        await (imgOnPosition).click();        
    }

    async open() {
        return super.open('inventory.html');
    }

}

module.exports = new InventoryPage();
