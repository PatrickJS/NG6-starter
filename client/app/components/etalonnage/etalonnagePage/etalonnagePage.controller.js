class etalonnagePageController {
  constructor($http) {
    'ngInject';

    let _this = this;
    $http.get("config/etalonnage.json").then(reply => _this.config = reply.data);
  }
}

export default etalonnagePageController;
