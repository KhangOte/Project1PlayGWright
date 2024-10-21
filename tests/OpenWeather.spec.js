//@ts-check

const {test, expect} = require("@playwright/test")

test('Validate OpenWeather Website title',async({page})=>{

await page.goto('https://openweathermap.org/');
await expect(page).toHaveTitle(/OpenWeather/);

})
