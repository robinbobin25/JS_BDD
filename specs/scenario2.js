var mainPage = require('../pages/MainPage');
var categoryPage = require('../pages/CategoryPage');

describe('check filter by manufacturer', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('http://pn.com.ua');
    });

    it('should choose manufacturer and check product manufacturers', function () {

        mainPage.carCategory.click();

        var manufacturerName = categoryPage.hondaManufacturer.getText();
        categoryPage.hondaManufacturer.click();

        expect(categoryPage.productName).toContain(manufacturerName);

    });

});