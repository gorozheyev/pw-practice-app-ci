import { state } from '@angular/animations';
import {test, expect} from '@playwright/test';

test.beforeEach(async ({page},testInfo) => {
  await page.goto(process.env.URL)
  await page.getByText('Button Triggering AJAX Request').click()
  testInfo.setTimeout(testInfo.timeout + 2000) //increase timeout for this tests to 2 seconds
})

test('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click()

    // const text = await successButton.textContent()
    // await successButton.waitFor({state: "attached"})
    // const text = await successButton.allTextContents()


    // expect(text).toContain('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})

})

//alternative waits
test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    //wait for element
    //await page.waitForSelector('.bg-success')

    //wait for particular response
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be compleated ("NOT RECOMMENDED")
    //await page.waitForLoadState('networkidle')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

//timeouts
test('timeouts', async ({page}) => {
    // test.setTimeout(30000)

    test.slow() //increase timeout for this test x3 times
    const successButton = page.locator('.bg-success')
    await successButton.click()
})
