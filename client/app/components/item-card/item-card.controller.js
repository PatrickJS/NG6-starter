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
        {img_1: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'},
        {img_2: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'},
        {img_3: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'},
        {img_4: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'},
        {img_5: 'https://images-na.ssl-images-amazon.com/images/I/419QIHJRYYL.jpg'}
      ],
      information: [
        {
          col_name: 'ASIN',
          col_info: 'BP1AADLL'
        },
        {
          col_name: 'Release date',
          col_info: 'September 15, 2016'
        },
        {
          col_name: 'Best Sellers Rank',
          col_info: 'BP1AADLL'
        },
        {
          col_name: 'Pricing',
          col_info: 'The strikethrough price is the List Price. Savings represents a discount off the List Price.'
        },
        {
          col_name: 'Product Dimensions',
          col_info: '16.8 x 14 x 4 inches; 8.5 pounds'
        },
        {
          col_name: 'Another info',
          col_info: 'Another info'
        }
      ]
    };
    this.images = [this.product.images[0],this.product.images[1],this.product.images[2]];
  }
}

export default ItemCardController;
