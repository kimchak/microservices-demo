import { test, expect } from '@playwright/test'
import { HomePage, LoginPopup } from 'pages'

test.describe('Sock shop regression test suite', async () => {
    test('Successful user login', async ({page}) => {
        const home = new HomePage(page)
        const login = new LoginPopup(page)
        await home.navigate()
        await home.loginButton.click()
        await login.submitCredentials('user','password')
        await login.validateLoginSuccess()        
    })

    test('Failed user login', async ({page}) => {
        const home = new HomePage(page)
        const login = new LoginPopup(page)
        await home.navigate()
        await home.loginButton.click()
        await login.submitCredentials('wrongUser','wrongPassword')
        await login.validateLoginFailure()        
    })
})
