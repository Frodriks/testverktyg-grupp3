const { Builder, By, Key, until} = require('selenium-webdriver');
const should =require('chai').should();

/* As a customer,
I would like to be able to sort men's pants by price,
in order to locate the cheapest pair */

describe.only('Sort pants by price', () => {
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
              await driver.findElement(By.css('#ui-id-5')).click(); //detta funkar

              await driver.sleep(2000);

              // Find all elements with the class "li.item"
                const listItemElements = await driver.findElements(By.css('li.item'));

              // Find the second-to-last element with the class "li.item" and click on it
               // const secondToLastElement = listItemElements[listItemElements.length - 11]; //testar olika -n/nn
               // await secondToLastElement.click();

               await driver.wait(until.elementLocated(By.css('ul.items:nth-child(4) > li:nth-child(1) > a:nth-child(1)')), 10000);
               await driver.findElement(By.css('ul.items:nth-child(4) > li:nth-child(1) > a:nth-child(1)')).click();


               await driver.wait(until.elementLocated(By.id('sorter')), 10000);
               await driver.findElement(By.css('#sorter')).click();
               
               

               await driver.wait(until.elementLocated(By.css('div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)')), 10000);
            
               await driver.findElement(By.css('div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)')).click(); 

                  
                  await driver.wait(until.elementLocated(By.css('#product-price-802 > span:nth-child(1)')), 10000);
                  const information = await driver.findElement(By.css('#product-price-802 > span:nth-child(1)')).getText();
  
                  // Asserts
                  information.should.contain('$28.00');
                



              // Press "Pants"
              /*
              driver.wait(async function () {
                const listElements = await driver.findElements(By.css('li.item'));
                return listElements.length > 0;
              });
              
              // Find the second-to-last list element with the class "li.item" and click on it
              driver.findElements(By.css('li.item')).then(function (listElements) {
                const secondToLastItem = listElements[listElements.length - 2];
                secondToLastItem.click();   
*/
              //var list = document.getElementsByClassName("li.item")[0];
              //var pants = list.children[list.children.length - 2];
              //var itemId = pants.getAttribute("pants-id");
              
              //await driver.wait(until.elementLocated(By.css('a[href="https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html"')), 10000);
              //await driver.findElement(By.css('a[href="https://magento.softwaretestingboard.com/men/bottoms-men/pants-men.html"')).click();

              // Press "Pants"
              // await driver.findElement(By.css('#ui-id-23')).click();

              //await driver.sleep(10000);

              // Click Sort by drop-down menu
              //await driver.findElement(By.css('#sorter')).click(); 

              // Click Sort by: Price
             // await driver.findElement(By.css('html body.page-with-filter.page-products.categorypath-men-bottoms-men-pants-men.category-pants-men.catalog-category-view.page-layout-2columns-left div.page-wrapper main#maincontent.page-main div.columns div.column.main div.toolbar.toolbar-products div.toolbar-sorter.sorter select#sorter.sorter-options option')).click();
             //CSS selector copy: div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)

            } catch(error) {
                console.log(error);
     
            } finally { 
             //   await driver.quit();
            }
        });
    });
});
