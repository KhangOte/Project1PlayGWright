const {test,expect} = require ("@playwright/test");

test ('Multiple Select Values From Dropdown', async({page}) => {

await page.goto('https://www.saucedemo.com/');
await page.locator("//input[@class = 'input_error form_input' and @placeholder='Username']").fill('standard_user');
await page.locator("//input[@class = 'input_error form_input' and @placeholder='Password']").fill('secret_sauce');
await page.locator("//input[@class = 'submit-button btn_action']").click();

});