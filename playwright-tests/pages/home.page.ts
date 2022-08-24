import {Page, Locator, expect} from '@playwright/test'

export class HomePage {
    readonly page: Page
    public readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.loginButton = this.page.locator('#login')
    }

    async navigate() {
        await this.page.goto('')
    }
}