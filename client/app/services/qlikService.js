export default class QlikService {
  constructor(qlik) {
    'ngInject';
    this.qlik = qlik.instance;
    this.app = qlik.instance.openApp(qlik.appId, qlik.config);
  }

  getVisualization(element, objectId) {
    return this.app.getObject(element, objectId);
  }

  select(field, value, state) {
    return this.app.field(field, state).selectValues([value]);
  }

  setVariable(name, value) {
    if (isNaN(value)) {
      return this.app.variable.setStringValue(name, value);
    } else {
      return this.app.variable.setNumValue(name, value);
    }
  }

  applyBookmark(id) {
    return this.app.bookmark.apply(id);
  }

  resize() {
    this.qlik.resize();
  }

  bindVisualizationData(objectId, callback) {
    let _this = this;

    return _this.app.getObjectProperties(objectId).then(model => {

      let qHyperCubeDef = model.enigmaModel.properties.qHyperCubeDef;

      qHyperCubeDef.qInitialDataFetch = [{
        qTop: 0,
        qLeft: 0,
        qHeight: 100,
        qWidth: 20
      }];

      return _this.app.createCube(qHyperCubeDef, callback);
    });
  }
}
