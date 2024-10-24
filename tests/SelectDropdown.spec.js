//@ts-check

const {test,expect} = require ("@playwright/test");

test ('Halding Select Based Dropdown', async({page}) => {

await page.goto('https://www.saucedemo.com/');
await page.locator("//input[@class = 'input_error form_input' and @placeholder='Username']").fill('standard_user');
await page.locator("//input[@class = 'input_error form_input' and @placeholder='Password']").fill('secret_sauce');
await page.locator("//input[@class = 'submit-button btn_action']").click();
await page.locator("//select[@class = 'product_sort_container']").selectOption('hilo');
await page.locator("//select[@class = 'product_sort_container']").selectOption({index: 1});
await page.locator("//select[@class = 'product_sort_container']").selectOption({label: 'Price (low to high)'});
await page.waitForTimeout(5000);

});