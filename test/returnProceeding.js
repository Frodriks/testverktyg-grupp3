const {Builder, By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();

/* As a customer, i would like to be able to reorder an allready orderd order */
describe.only('Create a reorder', () => {
    //Test case:
    context('Filling the form', () => {
        it('IDK?', async () => {
            //Start webbrowser
            const driver = await new Builder().forBrowser('firefox').build();

            //Reorder my old order
            try{
                // Go to google.com
                await driver.get('https://magento.softwaretestingboard.com/customer/account/create/');
        
                let firstButton = await driver.wait(until.elementLocated(By.name('firstname')), 10000);
                await firstButton.click();
                await driver.findElement(By.name('firstname')).sendKeys('Tim', Key.RETURN);
                await driver.wait(until.elementLocated(By.name('#email.-text')), 10000);
                await driver.wait(10000);
            }
            finally {
                await driver.quit();
            }
        }); 
    });
});