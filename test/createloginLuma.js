const { link } = require('fs');
const { Builder, By, Key, until } = require('selenium-webdriver');

const should = require('chai').should();

async function googleSearch() {
    
    let driver = await new Builder().forBrowser('firefox').build();

    try {
       
        await driver.get('https://magento.softwaretestingboard.com/customer/account/create/');
        

        let firstButton = await driver.wait(until.elementLocated(By.name('firstname')), 10000);
        
        await firstButton.click();

        await driver.findElement(By.name('firstname')).sendKeys('Tim', Key.RETURN);

        let secondButton = await driver.wait(until.elementLocated(By.name('lastname')), 10000);

        await secondButton.click();

        await driver.findElement(By.name('lastname')).sendKeys('Jonsson', Key.RETURN);

        let thirdButton = await driver.wait(until.elementLocated(By.name('email')), 10000);

        await thirdButton.click();

        await driver.findElement(By.name('email')).sendKeys('blahblah@gmail.com', Key.RETURN);

        let fourthButton = await driver.wait(until.elementLocated(By.name('password')), 10000);

        await fourthButton.click();

        await driver.findElement(By.name('password')).sendKeys('Blah1!1#2!L', Key.RETURN);

        let fifthButton = await driver.wait(until.elementLocated(By.name('password_confirmation')), 10000);

        await fifthButton.click();

        await driver.findElement(By.name('password_confirmation')).sendKeys('Blah1!1#2!L', Key.RETURN);



    
        
    

      

    } catch(error) {
        console.log(error);
    } finally {
        //console.log('Test ran successfully.');
        //await driver.quit();
    }
}

googleSearch();

