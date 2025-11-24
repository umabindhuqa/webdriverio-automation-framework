const LoginPage = require('../pageobjects/login.page');

describe('Login Functionality', () => {

    beforeEach(async () => {
        await LoginPage.open();   // Navigate to login page before each test
    });

    it('should login successfully with valid credentials', async () => {
        await LoginPage.login('admin', 'password123');
        
        // Assertion: Verify user is redirected to dashboard
        await expect(browser).toHaveUrlContaining('dashboard');
    });

    it('should show error message for invalid credentials', async () => {
        await LoginPage.login('wrongUser', 'wrongPass');

        // Assertion: Validate error message
        const errorText = await LoginPage.getErrorText();
        await expect(errorText).toContain('Invalid username or password');
    });

    it('should not allow empty username', async () => {
        await LoginPage.login('', 'password123');

        const errorText = await LoginPage.getErrorText();
        await expect(errorText).toContain('Username is required');
    });

    it('should not allow empty password', async () => {
        await LoginPage.login('admin', '');

        const errorText = await LoginPage.getErrorText();
        await expect(errorText).toContain('Password is required');  
    });

});
