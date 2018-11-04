class {{ properCase name }}Service {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.name = '{{ properCase name }}Service';
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

export default {{ properCase name }}Service;
