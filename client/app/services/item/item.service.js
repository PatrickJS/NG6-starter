class ItemService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.name = 'ItemService';
  }

  getName () {
    return this.name;
  }
  getItems () {
    return this.$http({
      method: 'GET', url: '/services/items' }
    );
  }
}

export default ItemService;
