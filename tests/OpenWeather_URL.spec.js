//@ts-check

const {test,expect}=require("@playwright/test")

test('Validation URL of OpenWeather website',async({page})=>{

    await page.goto('https://openweathermap.org/');
    await expect(page).toHaveURL(/.*openweathermap/);
    
})