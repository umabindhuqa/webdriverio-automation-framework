class LoginPage {
    /**
     * Define selectors using getter methods
     */
    get inputUsername() {
        return $('#username'); 
    }

    get inputPassword() {
        return $('#password'); 
    }

    get btnLogin() {
        return $('#login'); 
    }

    /**
     * A reusable login function
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
