const Page = require('./page');

class FooterPage extends Page {

    get twitterIcon () { return $('.social_twitter') }
    get facebookIcon () { return $('.social_facebook') }
    get linkedInIcon () { return $('.social_linkedin') }

    async goFacebook () {
        await (await this.facebookIcon).click();
    }

    async goTwitter () {
        await (await this.twitterIcon).click();
    }

    async goLinkedIn () {
        await (await this.linkedInIcon).click();
    }

    open() {
        return super.open("inventory.html");
    }

}

module.exports = new FooterPage();
