//@ts-check

const {test, expect} = require("@playwright/test");

test('Auto Select', async({page}, testInfo) => {

    // const searchValue = "openwe";
    const SelectValue = "ChatBot assistant";

    await page.goto('https://openweathermap.org/');
    await page.locator("//div[@id = 'support-dropdown']").click();

    const values = page.locator("//ul[@id = 'support-dropdown-menu']/li")
    const Countvalues = await values.count(); //=> count "values" above

    for(let i=0; i<Countvalues;i++){
        const text = await values.nth(i).textContent();

        if(text === SelectValue){ // => if "text" equal selectValue(already value) 
            await values.nth(i).click(); // => click it ("text" value above)
            break;
        }
    }

    await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })

});