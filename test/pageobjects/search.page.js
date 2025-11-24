class SearchPage {

    // ============================
    // Selectors
    // ============================
    get searchInput() {
        return $('#search');
    }

    get searchButton() {
        return $('#searchBtn');
    }

    get searchResults() {
        return $$('.result-item');
    }

    get noResultsMessage() {
        return $('#noResults');
    }

    // ============================
    // Actions
    // ============================

    /**
     * Open Search Page
     */
    open() {
        browser.url('/search');
    }

    /**
     * Perform a search
     * @param {string} keyword 
     */
    async search(keyword) {
        await this.searchInput.setValue(keyword);
        await this.searchButton.click();
    }

    /**
     * Get number of results displayed
     */
    async getResultsCount() {
        return await this.searchResults.length;
    }

    /**
     * Get "No results found" text
     */
    async getNoResultsText() {
        return await this.noResultsMessage.getText();
    }
}

module.exports = new SearchPage();
