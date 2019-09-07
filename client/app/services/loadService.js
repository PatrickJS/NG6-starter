export default class loadService {
  constructor($http, qlikService) {
    'ngInject';

    let _this = this;
    let promises = [];

    this.config = {};

    promises.push($http.get("config/navigation.json").then(reply => _this.config.navigation = reply.data));
    promises.push($http.get("config/etalonnage.json").then(reply => _this.config.etalonnage = reply.data));
    promises.push($http.get("config/comparaisons.json").then(reply => _this.config.comparaisons = reply.data));
    promises.push(qlikService.applyBookmark("92c3d232-13eb-4787-8344-1da5b0e75bdb"));

    this.initialized = Promise.all(promises);
  }

  loadConfig(name) {
    let _this = this;
    return this.initialized.then(() => {
      return _this.config[name];
    });
  }
}
