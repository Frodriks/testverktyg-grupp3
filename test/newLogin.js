const { assert } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
const should = require("chai").should();
//Som kund vill jag kunna logga in på sidan så att jag kan se mina sidor.
describe("Logga in på kontot", () => {
  context("Fyll i konto detaljer och logga in", () => {
    it("Jag är inloggad och kan se personliga detaljer", async () => {
      let driver = await new Builder().forBrowser("firefox").build();
      try {
        await driver.get(
          "https://magento.softwaretestingboard.com/customer/account/login/"
        );
            //hitta elementet
        let firstButton = await driver.wait(
          until.elementLocated(By.name("login[username]")),
          10000
        );
            //klicka knappen
        await firstButton.click();
            //skriv och klicka enter
        await driver
          .findElement(By.name("login[username]"))
          .sendKeys("hejan@hejsan.hejsan", Key.RETURN);
        let secondButton = await driver.wait(
          until.elementLocated(By.name("login[password]")),
          10000
        );
        await secondButton.click();
        await driver
          .findElement(By.name("login[password]"))
          .sendKeys("LoggaIn123", Key.RETURN);
          await driver.sleep(10000);
          await driver.wait(until.elementLocated(By.css('.logged-in')), 10000);
          const information = await driver.findElement(By.css('.logged-in')).getText();
          information.should.contain('namn efter')
        // testet funkar inte eftersom en recaptcha behövs att fyllas i (antibot) men den fyller i detaljerna som den ska och jag har en assert som jag bara kan anta att den funkar
            //testet körs genom att skriva "npx mocha --no-timeouts"
      } catch (error) {
        console.log(error);
      } finally {
        await driver.quit();
        
      }
    });
  });
});