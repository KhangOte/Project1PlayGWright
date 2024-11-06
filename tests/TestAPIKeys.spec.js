//@ts-check

const {test, expect} = require ("@playwright/test");
const { assert } = require("console");

test ('Test Create And Delete func for APIKeys', async({page}, testInfo) => {

    const KeysAPI = "TestPlaywrights";

    await page.goto('https://openweathermap.org/');

    await page.getByRole('link',{name: 'Sign in'}).click();
    await page.locator("//input[@class = 'string email optional form-control']").fill('minionmatbua@gmail.com');
    await page.locator("//input[@class = 'form-control']").fill('12345678');
    await page.getByRole('button',{name: 'Submit'}).click();

    await page.getByRole('link',{name: 'API keys'}).click();

    await page.getByPlaceholder('API key name').fill(KeysAPI);
    await page.getByRole('button', {name: 'Generate'}).click();
    await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })

    const nameAPIKeyCreated = await page.locator("//table[@class = 'material_table api-keys']//tbody[1]//tr[2]//td[2]").textContent();
    console.log(nameAPIKeyCreated);
    expect(KeysAPI).toEqual(nameAPIKeyCreated);

    
    await page.on("dialog", async(a)=>{

        console.log(await a.message()) //=> alow alert display
        a.accept()
    })

    await page.locator("//tr[2]//td[4]//i[@class = 'fa fa-remove']").click();

    await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })
});