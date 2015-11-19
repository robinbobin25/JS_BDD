var mainPage = require('../pages/MainPage');
var categoryPage = require('../pages/CategoryPage');

describe('check filter by price', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://pn.com.ua');
    });

    it('should check the price filter', function () {

        mainPage.carCategory.click();

        var expectedMinPrice = categoryPage.expectedMinPrice.getText(); // save for the future
        categoryPage.expectedMinPrice.click();

        var expectedMaxPrice = categoryPage.expectedMaxPrice.getText(); // save for the future
        categoryPage.expectedMaxPrice.click();

        categoryPage.sortByPriceLink.click();

        expect(categoryPage.firstPrice).toBeCloseTo(expectedMinPrice);
        expect(categoryPage.lastPrice).toBeCloseTo(expectedMaxPrice);

    });

});
