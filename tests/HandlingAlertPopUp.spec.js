//@ts-check

const {test, expect} = require ("@playwright/test");

test('Simple Alert PopUp', async({page}) => {

    await page.goto ('')

    await page.on("dialog", async(a)=>{

        console.log(await a.message()) //=> alow alert display
        a.accept()
    })
    
    await page.locator('').click();
})

test('Confirmation Alert PopUp', async({page}) => {

    await page.goto ('')

    await page.on("dialog", async(b)=>{

        console.log(await b.message()) //=> alow alert display
        b.accept() // or b.dismiss
    })
    
    await page.locator('').click();
})

test('Prompt Alert PopUp', async({page}) => {

    await page.goto ('')

    await page.on("dialog", async(c)=>{

        console.log(await c.message()) //=> alow alert display
        c.accept('.....')
    })
    
    await page.locator('').click();
})

