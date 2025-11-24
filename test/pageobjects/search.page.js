class SearchPage {
    get searchInput() { return $('#search'); }
    get results() { return $$('#results .item'); }

    async search(term) {
        await this.searchInput.setValue(term);
        await browser.keys('Enter');
    }
}

module.exports = new SearchPage();
