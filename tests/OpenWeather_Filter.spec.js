import {test,expect} from '@playwright/test';

test('Filter Locator',async({page,context}) =>{

    await context.tracing.start({screenshots: true, snapshots:true});
    await page.goto('https://openweathermap.org/');
    await page.getByRole('link',{name: 'Sign in'}).click();

    await page
    .locator("//input[@class = 'string email optional form-control']")
    .fill('miniomatbua@gamil.com');
    await page
    .locator("//input[@class = 'form-control']")
    .fill('12345678');
    await page
    .locator("//input[ @value = 'Submit']").click();
    
    await context.tracing.stop({path:'tracing.zip'});

});