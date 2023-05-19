const {Builder, By, Key, until} = require ('selenium-webdriver');
const should = require('chai').should();

/* As a customer, i would like to be able to reorder an allready orderd order */
describe('Create a reorder', () => {
    //Test case:
    context('Filling the form', () => {
        it('Press "PLACE ORDER" button', async () => {
            //Start webbrowser
            const driver = await new Builder().forBrowser('firefox').build();
            
            //Reorder my old order
            try{
                //access  magento website
                await driver.get('https://magento.softwaretestingboard.com/');
                console.log('access  magento website');

                //Access orders and return page
                await driver.wait(until.elementLocated(By.css('.nav:nth-child(4) a')), 30000);
                await driver.findElement(By.css('.nav:nth-child(4) a')).click();
                console.log('Access orders and return page');
                
                //Fill Order-ID
                await driver.wait(until.elementLocated(By.css('#oar-order-id')), 30000);
                await driver.findElement(By.id('oar-order-id')).sendKeys('000007642 ');
                console.log('Fill Order-ID');

                //Fill Billing-lastname
                await driver.findElement(By.id('oar-billing-lastname')).sendKeys('stenquist');
                console.log('Fill Billing-lastname');

                //Select "Find order by" = email
               const selectEorZ = await driver.findElement(By.id('quick-search-type-id'));
               await selectEorZ.click();
               await selectEorZ.findElement(By.css('option[value="email"]')).click();
               console.log('Select "Find order by" = email');

                //Fill Email
                await driver.findElement(By.id('oar_email')).sendKeys('viktor.stenquist@live.se');
                console.log('Fill Email');

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press: continue-button
                await driver.wait(until.elementLocated(By.className('primary')), 30000);
                await driver.findElement(By.className('primary')).click();
                console.log('Press: continue-button');

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press on the reorder link
                await driver.wait(until.elementLocated(By.className('order')), 30000);
                await driver.findElement(By.className('order')).click();
                console.log('Press on the reorder link');

                //Let whe website load for 2 seconds extra
                await driver.sleep(2000);

                //Press: proceed-to-checkout-button
                await driver.wait(until.elementLocated(By.css('.checkout-methods-items > .item > button')),30000);
                await driver.findElement(By.css('.checkout-methods-items > .item > button')).click();
                console.log('Press: proceed-to-checkout-button');

                //Let whe website load for 5 seconds extra
                await driver.sleep(5000);

                //Fill new form
                console.log('');
                //Fill email-address
                await driver.wait(until.elementLocated(By.id('customer-email')), 30000);
                await driver.findElement(By.id('customer-email')).sendKeys('viktor.stenquist@live.se');
                console.log('Fill email-address');

                //Fill firstname
                await driver.wait(until.elementLocated(By.name('firstname')), 30000);
                await driver.findElement(By.name('firstname')).sendKeys('viktor');
                console.log('Fill firstname');

                //Fill lastname
                await driver.findElement(By.name('lastname')).sendKeys('stenquist');
                console.log('Fill lastname');

                //Fill street-address
                await driver.findElement(By.name('street[0]')).sendKeys('Lilla vägen 37');
                console.log('Fill street-address');

                //Fill City
                await driver.findElement(By.name('city')).sendKeys('Öckerö');
                console.log('Fill City');

                //Let whe website load for 1 second extra
                await driver.sleep(1000);

                //Select Sweden as country
                const selectContry = await driver.findElement(By.name('country_id'));
                await selectContry.click();
                await selectContry.findElement(By.css('option[value="SE"]')).click();
                console.log('Select Sweden as country');

                //Fill Zip Code
                await driver.findElement(By.name('postcode')).sendKeys('123 45');
                console.log('Fill Zip Code');

                
                
                //fill nummber
                await driver.findElement(By.name('telephone')).sendKeys('072 757 32 32');
                console.log('fill nummber');

                //Let whe website load for 5 seconds extra
                await driver.sleep(5000);

                // Press "NEXT" button
                await driver.wait(until.elementLocated(By.css('#shipping-method-buttons-container > .primary > button')), 30000);
                await driver.findElement(By.css('#shipping-method-buttons-container > .primary > button')).click();
                console.log('Press "NEXT" button');

                //Let whe website load for 10 seconds extra
                await driver.sleep(10000);

                // Press "PLACE ORDER" button
                await driver.wait(until.elementLocated(By.css('.actions-toolbar > .primary > .checkout')), 30000);
                await driver.findElement(By.css('.actions-toolbar > .primary > .checkout')).click();
                console.log('Press "PLACE ORDER" button');

                //Find "Thank You" message
                await driver.wait(until.elementLocated(By.className('checkout-success')), 30000);
                const information = await driver.findElement(By.className('checkout-success')).getText();

                //Let whe website load for 5 seconds extra
                await driver.sleep(5000);

                // Asserts
                information.should.contain('Your order # is');
                
            }
            finally {
                await driver.quit();
            }
        }); 
    });
});