/**
 * Created by Antonina_Mykhailenko on 19.11.2015.
 */

var CategoryPage = function(){

    /* for scenario1 */
    this.expectedMinPrice = element(by.css('[href$="?fp1=100000"]'));
    this.expectedMaxPrice = element(by.css('.is_empty_items [href$="?fp1=100000&fp2=150000"]'));
    this.sortByPriceLink = element(by.css('[href$="?fp1=100000&fp2=150000&sort=price"]'));

    this.firstPrice = element(by.xpath('(//div[@class="price"]/strong)[1]')).getText();
    this.lastPrice = element(by.xpath('(//div[@class="price"]/strong)[last()]')).getText();

   /* for scenario2 */
    this.hondaManufacturer = element(by.xpath('//a[@href="http://pn.com.ua/ct/3011/?fo=492"]'));
    this.productName = element(by.css('div.name a')).getText();

    /* for scenario3 */
    this.sortByPriceLinkAnotherLocator = element(by.css('a[href="http://pn.com.ua/ct/3011/?sort=price"]'));
    this.theCheapestCar = element(by.xpath('(//div[@class="name"]/a)[1]'));
    this.searchField = element(by.css('#edit-name-1'));
    this.searchButton = element(by.css('#edit-submit-1'));
};

module.exports = new CategoryPage();