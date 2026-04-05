import {test} from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/')
})


test.describe('suite1', () => {
    test.beforeEach(async ({page}) => {
    await page.getByText('Tables & Data').click()
})

test('first test1', async ({page}) => {
  await page.getByText('Smart Table').click();
})

test('navigate to datepicker page1', async ({page}) => {
  await page.getByText('Tree Grid').click();
})
})

test.describe('suite2', () => {
    test.beforeEach(async ({page}) => {
    await page.getByText('Forms').click()
})

test('first test2', async ({page}) => {
  await page.getByText('Form Layouts').click();
})

test('navigate to datepicker page2', async ({page}) => {
  await page.getByText('Datepicker').click();
})
})