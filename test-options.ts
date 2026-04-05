import {test as base} from '@playwright/test';
import { PageManager } from '../pw-practice-app/page-objects/pageManager';

export type TestOptions = {
    globalsQaUrl: string
    formsLayoutPage: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions>({
    globalsQaUrl: ['', {option: true }],

    formsLayoutPage: async({page}, use) => {
        await page.goto('/')
        await page. getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
        console.log('after use')
    },

    pageManager: async({page, formsLayoutPage}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})