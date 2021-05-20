const Page = require('./page');

class InventoryPage extends Page {

    get btnAdds () { return $$('.btn.btn_primary.btn_small.btn_inventory') }
    get itemsDescription () { return $$('.inventory_item_desc') }

    async addElement (position) {
        let elementOnPosition = await (await this.btnAdds)[position];
        await (elementOnPosition).click();       
    }

    async getItemDescription (position) {
        let descriptionOnPosition = await (await this.itemsDescription)[position];
        return descriptionOnPosition.getText();       
    }

    async open() {
        return super.open('inventory.html');
    }

}

module.exports = new InventoryPage();
