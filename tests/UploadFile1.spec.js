//@ts-check

const { test, expect } = require("@playwright/test");

test('Upload file without input type', async({page}, testInfo) =>{
    
    await page.goto('https://easyupload.io/');
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//button[@class = 'dz-button']").click();
    const filechooser = await fileChooserPromise;
    await filechooser.setFiles('C:/Users/Admin/Downloads/image.png');

    await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })
})

