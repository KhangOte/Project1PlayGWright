//@ts-check

const {test, expect} = require("@playwright/test");

test('Auto compelte',async({page},testInfo) =>{

    await page.goto('https://www.google.com/');
    await page.locator("//textarea[@class = 'gLFyf']").fill('openweather')
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    await page.locator('//*[@id="rso"]/div[1]/div/div/div/div/div/div/div/div[1]/div/span/a/h3').click();

    // await page.waitForFunction(() => {
    //     const now = Date.now();
    //     return now - start > 2000;
    //   });
    await page.waitForURL('https://openweathermap.org/');

    await page.locator("//input[@placeholder = 'Search city']").fill("ha noi");
    await page.click("//button[@class = 'button-round dark']");
    await page.waitForSelector("//ul[@class = 'search-dropdown-menu']//li[1]");

    // await page.screenshot({path: "Screenshots/home.png"});
    await testInfo.attach("home",{
        body: await page.screenshot(),
        contentType: "image/png",
    })

    await page.click("//ul[@class = 'search-dropdown-menu']//li[1]");

    // await page.waitForTimeout(10000);

})

