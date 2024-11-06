//@ts-check

const { test, expect } = require("@playwright/test")

test('Simple File Upload', async({page}) => {

    await page.goto('');
    await page.locator('location to upload file in web').setInputFiles('location file in PC need to upload'); // ex: .setInputFiles('C:/Users/Admin/Downloads/image.png')

})

test('Multi File Upload', async({page}) => {

    await page.goto('');
    await page.locator('location to upload file in web').setInputFiles(['location file 1 in PC need to upload','file 2', 'file 3','....']); // ex: .setInputFiles('C:/Users/Admin/Downloads/image.png')

})

test('Buffer File Upload', async({page}) => {

    await page.goto('');
    await page.locator('location to upload file in web').setInputFiles({
        name: '',
        mimeType: '',
        buffer: Buffer.from('this is a test')
    });

})