import HomePage from "../pages/HomePage";

describe('Example Test', () => {
    let homePage;

    beforeAll(async ()=>{
        homePage = new HomePage();
    });

    test('should load homepage', async () => {
        await homePage.visit();
        await homePage.isNavbarDisplayed();
        await homePage.wait(5000);
    },15000);
});