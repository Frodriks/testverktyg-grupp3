const { Builder, By, Key, until } = require("selenium-webdriver");
const should = require("chai").should();

//Som kund vill jag kunna skapa ett konto för att kunna ha tillgång till personliga sidor.
describe("Skapa ett konto", () => {
  context("Fyll i personliga detaljer för att skapa konto", () => { 
    it("Kontot är skapat och jag har tillgång till personliga sidor", async () => { 
    let driver = new Builder().forBrowser("firefox").build();
      try {
        //hämta sidan
        await driver.get(
          "https://magento.softwaretestingboard.com/customer/account/create/"
        );
        // hitta elementet för förnamn
        let firstButton = await driver.wait(
          until.elementLocated(By.name("firstname")),
          10000
        );
            //klicka förnamn knappen
        await firstButton.click();
            //skriv Tim och klicka enter tangenten
        await driver
          .findElement(By.name("firstname"))
          .sendKeys("Tim", Key.RETURN);
            //hitta elementet för andranamnet
        let secondButton = await driver.wait(
          until.elementLocated(By.name("lastname")),
          10000
        );
            //klicka knappen
        await secondButton.click();
        await driver
          .findElement(By.name("lastname"))
          .sendKeys("Jonsson", Key.RETURN);
        let thirdButton = await driver.wait(
          until.elementLocated(By.name("email")),
          10000
        );
        await thirdButton.click();
        await driver
          .findElement(By.name("email"))
          .sendKeys("blah123blah@gmail.com", Key.RETURN);
        //man måste byta en bokstav i mailen innan testet görs annars kommer den säga att kontot redan finns
        let fourthButton = await driver.wait(
          until.elementLocated(By.name("password")),
          10000
        );
        await fourthButton.click();
        await driver
          .findElement(By.name("password"))
          .sendKeys("Blah1!1#2!L", Key.RETURN);
        let fifthButton = await driver.wait(
          until.elementLocated(By.name("password_confirmation")),
          10000
        );
        await fifthButton.click();
        await driver
          .findElement(By.name("password_confirmation"))
          .sendKeys("Blah1!1#2!L", Key.RETURN);
          await driver.sleep(10000);
          //assertions
          await driver.wait(until.elementLocated(By.css('.logged-in')), 10000);
          const information = await driver.findElement(By.css('.logged-in')).getText();
          information.should.contain('Tim Jonsson')
          //testet funkar och man skapar ett konto men man behöver ändra vissa detaljer för att göra testet igen eftersom att man kan inte ha samma detaljer på flera konton
      } catch (error) {
        console.log(error);
      } finally {
        
        await driver.quit();
      }
    });
  });
});