import BasePage from './BasePage';
export default class HomePage extends BasePage {
    constructor(...args) {
        super(...args);
        this.url = 'http://zero.webappsecurity.com/index.html';
        this.principalSelector = '#nav';
        this.pageNavSelector = '#pages-nav';
    }
    async visit() {
        await page.goto(this.url);
        await page.waitForSelector(this.principalSelector);
    }
    async isNavbarDisplayed() {
        await page.waitForSelector(this.principalSelector);
        await page.waitForSelector(this.pageNavSelector);
    }

}