class LoginPage {

    // ============================
    // Selectors
    // ============================
    get usernameInput() {
        return $('#username');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginBtn() {
        return $('#loginBtn');
    }

    get errorMessage() {
        return $('#error');
    }

    // ============================
    // Actions
    // ============================

    /**
     * Open Login Page
     */
    open() {
        browser.url('/login');
    }

    /**
     * Login using username & password
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * Get error text (if login fails)
     */
    async getErrorText() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
