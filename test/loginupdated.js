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
                await driver.get('https://magento.softwaretestingboard.com/customer/account/login/');
        

                let firstButton = await driver.wait(until.elementLocated(By.name('login[username]')), 10000);
        
                await firstButton.click();

                await driver.findElement(By.name('login[username]')).sendKeys('blahblah@gmail.com', Key.RETURN);

                let secondButton = await driver.wait(until.elementLocated(By.name('login[password]')), 10000);

                await secondButton.click();

                await driver.findElement(By.name('login[password]')).sendKeys('Blah1!1#2!L', Key.RETURN);
            }
            finally {
                await driver.quit();
            }
        }); 
    });
});