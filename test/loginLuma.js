
const { link } = require('fs');
const { Builder, By, Key, until } = require('selenium-webdriver');

const should = require('chai').should();

async function googleSearch() {
    
    let driver = await new Builder().forBrowser('firefox').build();

    try {
       
        await driver.get('https://magento.softwaretestingboard.com/customer/account/login/');
        

        let firstButton = await driver.wait(until.elementLocated(By.name('login[username]')), 10000);
        
        await firstButton.click();

        await driver.findElement(By.name('login[username]')).sendKeys('blahblah@gmail.com', Key.RETURN);

        let secondButton = await driver.wait(until.elementLocated(By.name('login[password]')), 10000);

        await secondButton.click();

        await driver.findElement(By.name('login[password]')).sendKeys('Blah1!1#2!L', Key.RETURN);



      
    
        
    

      

    } catch(error) {
        console.log(error);
    } finally {
        //console.log('Test ran successfully.');
        //await driver.quit();
    }
}

googleSearch();

