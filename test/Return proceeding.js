//As a customer, i would like to be able to return / cancel my order

const {Builder, By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();

/*  As a customer, i would like to be able to return
    / cancel my order if i change my mind.
*/
describe('Search for product', () => 
{
    //Test case:
    context('I seartch for a product', () => {
        it('I should see the product that i have searched for', async () => {
            //Start webbrowser
            const driver = await new Builder().forBrowser('firefox').build();

            //testing-test
            try{
                //access  magento website
                await driver.get('https://magento.softwaretestingboard.com/');

                //Get the seartch input
                await driver.wait(until.elementLocated(By.css('#search')), 10000);
                await driver.findElement(By.id('search')).sendKeys('shirt', Key.RETURN);

                //Find the first product
                await driver.wait(until.elementLocated(By.css('.product-item:first-child')), 10000);
                const product = await driver.findElement(By.css('.product-item:first-child'));

                //Extract text
                let productTitleText = await productTitle.getText();
                let productPriceText = await productPrice.getText();

                productTitleText.should.equal('Radiant Tee');
                productPriceText.should.equal('$22.00');
            }finally {
                await driver.quit();
            }
        }); 
    });
});