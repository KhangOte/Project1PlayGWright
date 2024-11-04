//@ts-check

const {test, expect} = require ("@playwright/test");
const { assert } = require("console");

test ('Test APIKeys', async({page}, testInfo) => {

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
    expect(KeysAPI).toEqual(nameAPIKeyCreated);

    await page.locator("//a[@href = '/api_keys/6728b8dbfe4ca40007468fe2']").click();
    

});