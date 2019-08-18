export default class QlikService {
  constructor(qlik) {
    'ngInject';

    this.app = qlik.instance.openApp(qlik.appId, qlik.config);
  }

  getVisualization(element, objectId) {
    this.app.getObject(element, objectId);
  }

  select(field, value) {
    this.app.field(field).selectValues([value]);
  }
}
