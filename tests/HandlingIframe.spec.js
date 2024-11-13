
//@ts-check 

const { test, expect } = require("@playwright/test")

test ('Handling Iframes', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/iframe');
    const frameArea = await page.frameLocator('#mce_0_ifr').locator("//body[@class ='mce-content-body mce-content-readonly']"); //=> locate Iframe 
    await frameArea.fill('this is text to test Handling Iframes in playwright'); 
    await expect(frameArea).toHaveText('this is text to test Handling Iframes in playwright'); // step to check 

    await page.waitForTimeout(7000);

})

