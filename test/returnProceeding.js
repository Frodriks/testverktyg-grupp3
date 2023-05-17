const {Builder, By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();

/* As a customer, i would like to be able to reorder an allready orderd order */
describe('Create a reorder', () => {
    //Test case:
    context('Filling the form', () => {
        it('IDK?', async () => {
            //Start webbrowser
            const driver = await new Builder().forBrowser('firefox').build();

            //Reorder my old order
            try{
                //access  magento website
                await driver.get('https://magento.softwaretestingboard.com/');

                //Access orders and return page
                await driver.wait(until.elementLocated(By.css('.nav:nth-child(4) a')), 30000);
                await driver.findElement(By.css('.nav:nth-child(4) a')).click();
                
                //Fill Order-ID
                await driver.wait(until.elementLocated(By.css('#oar-order-id')), 30000);
                await driver.findElement(By.id('oar-order-id')).sendKeys('000007642 ');

                //Fill Billing-lastname
                await driver.findElement(By.id('oar-billing-lastname')).sendKeys('stenquist');

                //Select "Find order by" = email
               const selectEorZ = await driver.findElement(By.id('quick-search-type-id'));
               await selectEorZ.click();
               await selectEorZ.findElement(By.css('option[value="email"]')).click();

                //Fill Email
                await driver.findElement(By.id('oar_email')).sendKeys('viktor.stenquist@live.se');

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press: continue-button
                await driver.wait(until.elementLocated(By.className('primary')), 30000);
                await driver.findElement(By.className('primary')).click();

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press on the reorder link
                await driver.wait(until.elementLocated(By.className('order')), 30000);
                await driver.findElement(By.className('order')).click();

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press: proceed-to-checkout-button
                await driver.wait(until.elementLocated(By.css('.checkout-methods-items > .item > button')),30000);
                await driver.findElement(By.css('.checkout-methods-items > .item > button')).click();

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Fill new form
                //Fill email-address
                await driver.wait(until.elementLocated(By.id('customer-email')), 30000);
                await driver.findElement(By.id('customer-email')).sendKeys('viktor.stenquist@live.se');

                //Fill first-name
                await driver.wait(until.elementLocated(By.name('firstname')), 30000);
                await driver.findElement(By.name('firstname')).sendKeys('viktor');
                
                //Fill last-name
                await driver.findElement(By.name('lastname')).sendKeys('stenquist');

                //Fill street-address
                await driver.findElement(By.name('street[0]')).sendKeys('Lilla vägen 37');

                //Fill City
                await driver.findElement(By.name('city')).sendKeys('Öckerö');

                //Let whe website load for 1 second extra
                await driver.sleep(1000);

                //Pick Sweden as country
                const selectContry = await driver.findElement(By.name('country_id'));
                await selectContry.click();
                await selectContry.findElement(By.css('option[value="SE"]')).click();

                //Fill Zip Code
                await driver.findElement(By.name('postcode')).sendKeys('123 45');

                
                
                //fill nummber
                await driver.findElement(By.name('telephone')).sendKeys('072 757 32 32');

                //Let whe website load for 5 seconds extra
                await driver.sleep(5000);

                // Press "NEXT" button
                await driver.wait(until.elementLocated(By.css('#shipping-method-buttons-container > .primary > button')), 30000);
                await driver.findElement(By.css('#shipping-method-buttons-container > .primary > button')).click();

                //Let whe website load for 5 seconds extra
                await driver.sleep(5000);

                // Press "PLACE ORDER" button
                await driver.wait(until.elementLocated(By.css('.actions-toolbar > .primary > .checkout')), 30000);
                await driver.findElement(By.css('.actions-toolbar > .primary > .checkout')).click();
            }
            finally {
                await driver.quit();
            }
        }); 
    });
});