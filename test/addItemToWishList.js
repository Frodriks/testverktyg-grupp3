const { Builder, By, Key, until } = require ("selenium-webdriver");
const { elementLocated } = require("selenium-webdriver/lib/until");
require('dotenv').config();
const should = require("chai").should();



//Logga in
let user = process.env.USER;
let pass = process.env.PASS;

/* As a customer,
I would like to save favourite product
to my  wish list to reference later.*/

// Test: Add product to wish list
describe("Add an item to the wish list", () => {
    context("Logga in to the Luma Demostore to add item to wish list", () => {
        it("Should be able to view item on my wish list", async () => {
            
            const driver = await new Builder().forBrowser("firefox").build();

            try {
                //Gå till butiken
                await driver.get("https://magento.softwaretestingboard.com/");
                await driver.findElement(By.css(".authorization-link > a:nth-child(1)")).click();

                //Wait for input
                await driver.wait(until.elementLocated(By.id('email')), 10000);

                //Send keys
                await driver.findElement(By.id('email')).sendKeys(user);
                await driver.findElement(By.id('pass')).sendKeys(pass);

                await driver.sleep(3000);

                //Click login button
                await driver.findElement(By.css('#send2')).click();

                

                // Gå till yoga collection
                await driver.findElement(By.css(".action.more.button")).click();

                await driver.sleep(3000);

                //Select an item witch you want put to wish list
                await driver.wait(elementLocated(By.css('.product-item-info a:first-child ')), 10000);
                
                await driver.findElement(By.css('.product-item-info a:first-child')).click();


                await driver.sleep(3000);

                //Select size 
                await driver.wait(elementLocated(By.css("#option-label-size-143-item-172")), 10000);
                await driver.findElement(By.css("#option-label-size-143-item-172")).click();

                //Select colour
                await driver.wait(elementLocated(By.css("#option-label-color-93-item-49")), 10000);
                await driver.findElement(By.css("#option-label-color-93-item-49")).click();

                // Add item to wish list
                await driver.wait(elementLocated(By.css('a[href$="#"]')), 10000);
                await driver.findElement(By.css('a[href$="#"]')).click();

                await driver.sleep(3000);

                 //View wish list
               await driver.wait(until.elementLocated(By.css('.message-success.success.message')), 15000);
               const information = await driver.findElement(By.css('.message-success.success.message')).getText();

               await driver.sleep(3000);

               //Asserts
                information.should.contain('Echo Fit Compression Short has been added');
            
    

            } finally {
                await driver.quit();
            }

        });
    });
});  


