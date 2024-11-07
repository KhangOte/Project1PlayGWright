//@ts-check

const {test, expect} = require ('@playwright/test');
const { buffer } = require('stream/consumers');

test('Basic auth tech', async ({page}, testInfo) =>{
    // Defined the basicauth credentials

    const username = 'admin';
    const password = 'admin';

    //Encode the credentials as base64 string

    const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

    // Set up the request interceptor to handle the basic auth

    await page.route('**/*', (route) => {
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,

        };
        route.continue({headers});

    })
    await page.goto('https://the-internet.herokuapp.com/basic_auth')
    const text = await page.locator("//div[@class = 'example']//p[1]").textContent();
    expect(text).toContain('Congratulations')

    await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })
})