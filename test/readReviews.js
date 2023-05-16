const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();


/* As a customer,
I would like to read all reviews from previous customers,
because I want to be sure if I want to buy some product. */

// Test: Read reviews 
describe("Read product reviews", () => {

    // Test case
    context ("When I navigate to the product page", () => {

        it("Should display all product reviews", async () => {
            const driver = await new Builder().forBrowser('firefox').build();

            try {
                // Gå till butiken
                await driver.get('https://magento.softwaretestingboard.com/');

                //Search the product
                await driver.wait(until.elementLocated(By.id('search')), 10000);
                await driver.findElement(By.id('search')).sendKeys('bag', Key.RETURN);

                  //Wait for 2 sec
                  await driver.sleep(2000);

                //Wait for the review section to load
                await driver.wait(until.elementLocated(By.css('.reviews-actions a:first-child')), 10000);
                await driver.findElement(By.css('.reviews-actions a:first-child')).click();

                //Wait for 3sec
                await driver.sleep(3000);

                // Find all review comments
                await driver.wait(until.elementLocated(By.id('customer-reviews')), 10000);

                //Assert
                const reviewComments = await driver.findElement(By.id('customer-reviews')).getText();
                reviewComments.should.contain('Customer Reviews');


            }catch(error) {
                console.log(error);
            }finally {
            await driver.quit();
            }
        });
 });
});