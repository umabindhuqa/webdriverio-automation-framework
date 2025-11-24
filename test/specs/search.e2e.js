const SearchPage = require('../pageobjects/search.page');

describe('Search Functionality', () => {

    beforeEach(async () => {
        await SearchPage.open();   // Navigate to search page before each test
    });

    it('should return results for a valid product', async () => {
        await SearchPage.search('Laptop');

        const resultCount = await SearchPage.getResultsCount();
        await expect(resultCount).toBeGreaterThan(0);
    });

    it('should show "No results found" for invalid search term', async () => {
        await SearchPage.search('asdasd12345');

        const message = await SearchPage.getNoResultsText();
        await expect(message).toContain('No results found');
    });

    it('should display results matching the search keyword', async () => {
        const keyword = 'phone';

        await SearchPage.search(keyword);
        const results = await SearchPage.searchResults;

        for (let result of results) {
            const text = await result.getText();
            await expect(text.toLowerCase()).toContain(keyword);
        }
    });

});
