import {Page, Locator, expect} from '@playwright/test'

export class LoginPopup {
    readonly page: Page
    public readonly loginMessage: Locator
    public readonly username: Locator
    public readonly password: Locator
    public readonly confirmButton: Locator


    constructor(page: Page) {
        this.page = page
        this.loginMessage = this.page.locator('#login-message')
        this.username = this.page.locator('#username-modal')
        this.password = this.page.locator('#password-modal')
        this.confirmButton = this.page.locator('button:has-text("Log in")')
    }

    async navigate() {
        await this.page.goto('/')
    }

    async submitCredentials(username: string, password: string) {
    await this.username.fill(username)
    await this.password.fill(password)
    await this.confirmButton.click()
    }

    async validateLoginSuccess() {
        console.log(this.loginMessage.innerText)
        await expect(this.loginMessage).toContainText('Login successful', {useInnerText: true})
    }

    async validateLoginFailure() {
       await expect(this.loginMessage).toContainText('Invalid login credentials', {useInnerText: true})
    }
}