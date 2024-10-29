//@ts-check

const {test, expect} = require("@playwright/test");

test('Auto compelte',async({page}) =>{

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

    await page.locator("//li[@id = 'desktop-menu']/form/input[1]").fill("ha noi");

    await page.waitForTimeout(10000);

})

