export default class loadService {
  constructor($http, qlikService) {
    'ngInject';

    let _this = this;
    let promises = [];

    this.config = {};

    promises.push($http.get("config/navigation.json").then(reply => _this.config.navigation = reply.data));
    promises.push($http.get("config/filters.json").then(reply => _this.config.filters = reply.data));
    promises.push($http.get("config/etalonnage.json").then(reply => _this.config.etalonnage = reply.data));
    promises.push($http.get("config/comparaisons.json").then(reply => _this.config.comparaisons = reply.data));
    promises.push(qlikService.applyBookmark("42484a93-6b6c-4d6c-a9d3-82445b984693"));

    this.initialized = Promise.all(promises);
  }

  loadConfig(name) {
    let _this = this;
    return this.initialized.then(() => {
      return _this.config[name];
    });
  }
}
