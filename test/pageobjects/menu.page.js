const Page = require('./page');

class MenuPage extends Page {

    get btnOpen () { return $('#react-burger-menu-btn') }
    get aboutOption () { return $('#about_sidebar_link') }
    get logoutOption () { return $('#logout_sidebar_link') }

    async open() {
        await (await this.btnOpen).click();
    }

    async goAbout() {
        await (await this.aboutOption).click();
    }

    async goLogout() {
        await (await this.logoutOption).click();
    }

    async selectAbout() {
        const location = await (await this.aboutOption).getLocation();
        await browser.pause(500);
        await (await this.aboutOption).moveTo(location);
    }
}

module.exports = new MenuPage();
