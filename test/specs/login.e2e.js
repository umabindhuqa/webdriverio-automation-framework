const LoginPage = require('../pageobjects/login.page');

describe('Login Feature', () => {
    it('should login successfully', async () => {
        await browser.url('https://example.com');
        await LoginPage.login('admin', 'password');
        await expect(browser).toHaveUrlContaining('dashboard');
    });
});
