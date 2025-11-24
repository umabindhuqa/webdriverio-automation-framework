/**
 * Utility Helper Functions
 * These functions can be reused across tests to improve readability
 * and maintain clean test scripts.
 */

module.exports = {

    /**
     * Generate random email address
     * @returns {string}
     */
    generateRandomEmail() {
        const timestamp = Date.now();
        return `user_${timestamp}@testmail.com`;
    },

    /**
     * Pause execution for given milliseconds
     * @param {number} ms 
     */
    async waitFor(ms) {
        await browser.pause(ms);
    },

    /**
     * Click an element after ensuring it is clickable
     * @param {WebdriverIO.Element} element 
     */
    async clickWhenClickable(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.waitForClickable({ timeout: 5000 });
        await element.click();
    },

    /**
     * Type text into an input field safely
     * @param {WebdriverIO.Element} element 
     * @param {string} text 
     */
    async safeType(element, text) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.setValue(text);
    },

    /**
     * Get text safely from any element
     * @param {WebdriverIO.Element} element 
     * @returns {Promise<string>}
     */
    async getTextSafe(element) {
        await element.waitForDisplayed({ timeout: 5000 });
        return await element.getText();
    }

};
