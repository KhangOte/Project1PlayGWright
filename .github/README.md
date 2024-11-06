# Run code with PlayWright

## Run all test:
 npx playwright test
## Run a single test:
 npx playwright test OpenWeather.spec.js 
## Run a set of test files:
 npx playwright test [test 1][test 2]
## Run files that specific words:
npx playwright test [word]
## Run the test with the title:
npx playwright test -g ["test title"]
## Run tests in headed mode:
 npx playwright test OpenWeather.spec.js --headed

# CodeGen
## Create CodeGen:
npx playwright codegen
npx playwright codegen -b [browser name]
ex: npx playwright codegen chromium
## Create CodeGen in new file
npx playwright codegen -o [location create CodeGen with ".spec.js"]
ex: npx playwright codegen -o .\tests\PlayWrightCodeGen.spec.js

# Get Locator
1. page.getByRole(): to locate by explicit and implicit accessibility attributes
2. page.getByText(): to locate by text content
3. page.getByLabel(): to locate a form control by associated label's text
4. page.getByPlaceholder(): to locate an input by placeholder
5. page.getByAltText(): to locate an element, usually image, bt its text alternative
6. page.getByTitle(): to locate an element by its title attribute
7. page.getByTestId(): to locate an element based on its data-testid attribute (other attributes can be configured)

# Capture screenshot after test failed
await testInfo.attach("home",{
        body: await page.screenshot(), // => capture and add screenshot into report
        contentType: "image/png",
    })
### run code:
npx playwright test ..... + "--trace on"
ex: npx playwright test -g "Filter Locator" --trace on
