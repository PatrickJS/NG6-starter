class ItemCardController {
  constructor() {
    this.strings = [
      'test text for <li> element1',
      'test text for <li> element2',
      'test text for <li> element3'
    ];
    this.product = {
      owner: 'Sony',
      name: 'PS 4 Slim 500GB Console - Uncharted 4 Bundle',
      price: 248.97,
      poster: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg',
      images: [
        'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'
      ],
      information: {
        'ASIN': 'BP1AADLL',
        'Release date': 'September 15, 2016',
        'Best Sellers Rank': 'BP1AADLL',
        'Pricing': 'The strikethrough price is the List Price. Savings represents a discount off the List Price.',
        'Product Dimensions': '16.8 x 14 x 4 inches; 8.5 pounds',
        'Another info': 'Another info'
      }
    };
    this.images = [];
    for (let i = 0; i < this.product.images.length && this.images.length < 3; i++) {
      this.images.push(this.product.images[i]);
    }
  }


}

export default ItemCardController;
