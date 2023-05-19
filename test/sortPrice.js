const { Builder, By, Key, until} = require('selenium-webdriver');
const should =require('chai').should();

/* As a customer,
I would like to be able to sort men's pants by price,
in order to locate the cheapest pair */

describe('Sort pants by price', () => {
    // Test case
    context('I sort mens pants by price', () => {
        it('I should see the cheapest pair of pants first', async () => {

            //Start Firefox
            const driver = await new Builder().forBrowser('firefox').build(); 

            try {
              // Go to LUMA
              await driver.get('https://magento.softwaretestingboard.com/')  

              // Press "Men" 
              
              await driver.wait(until.elementLocated(By.css('#ui-id-5')), 10000);
              await driver.findElement(By.css('#ui-id-5')).click(); 

              await driver.sleep(2000);

              
              // Press "Pants"  
              await driver.wait(until.elementLocated(By.css('ul.items:nth-child(4) > li:nth-child(1) > a:nth-child(1)')), 10000);
              await driver.findElement(By.css('ul.items:nth-child(4) > li:nth-child(1) > a:nth-child(1)')).click();

              // Press sort-by element
              await driver.wait(until.elementLocated(By.id('sorter')), 10000);
              await driver.findElement(By.css('#sorter')).click();
               
               
              // Press "Price"
              await driver.wait(until.elementLocated(By.css('div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)')), 10000);
              await driver.findElement(By.css('div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)')).click(); 

                  // Get price for assertion
                  await driver.wait(until.elementLocated(By.css('#product-price-802 > span:nth-child(1)')), 10000);
                  const information = await driver.findElement(By.css('#product-price-802 > span:nth-child(1)')).getText();
  
                  // Asserts
                  information.should.contain('$28.00');
                

            } catch(error) {
                console.log(error);
     
            } finally { 
                await driver.quit();
            }
        });
    });
});
