module.exports = class Page {

    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }

    open () {
        return browser.url('https://www.saucedemo.com')
    }
}
