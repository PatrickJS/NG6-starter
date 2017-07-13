
class ItemCardController {
  constructor() {
    this.name = 'PS 4 Slim 500GB Console - Uncharted 4 Bundle';
    this.poster = 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg';
    this.strings = [
      'test text for <li> element1',
      'test text for <li> element2',
      'test text for <li> element3'
    ];
    this.testData = [
      {
        name: 'ASIN',
        info: 'BP1AADLL',
      },
      {
        name: 'Release date',
        info: 'September 15, 2016',
      },
      {
        name: 'Best Sellers Rank',
        info: 'BP1AADLL',
      },
      {
        name: 'Pricing',
        info: 'The strikethrough price is the List Price. Savings represents a discount off the List Price.'
      },
      {
        name: 'Product Dimensions',
        info: '16.8 x 14 x 4 inches; 8.5 pounds'
      },
      {
        name: 'Another info',
        info: 'Another info'
      }
    ];
    this.price = 248.97;
  }
}

export default ItemCardController;
