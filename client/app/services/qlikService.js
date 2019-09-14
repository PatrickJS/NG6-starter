export default class qlikService {
  constructor(qlik) {
    'ngInject';
    this.qlik = qlik.instance;
    this.config = qlik.config;
    this.app = qlik.instance.openApp(qlik.appId, qlik.config);
  }

  getVisualization(element, objectId) {
    return this.app.getObject(element, objectId);
  }

  field(field, callback) {
    let f = this.app.field(...field).getData();
    f.OnData.bind(callback);
    return f;
  }

  select(field, values, state, toggle) {
    return this.app.field(field, state).selectValues(values, toggle);
  }

  getVariable(name, callback) {
    return this.app.variable.getContent(name, reply => {
      let v = reply.qContent.qIsNum ? reply.qContent.qString / 1 : reply.qContent.qString;
      return callback(v);
    });
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

  bindListData(listExp, callback) {
    let _this = this;

    return _this.app.createList({
      "qDef": {
        "qFieldDefs": [
          listExp
        ]
      },
      "qInitialDataFetch": [{
        qTop: 0,
        qLeft: 0,
        qHeight: 20,
        qWidth: 1
      }]
    }, callback);
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

  exportData(qlikObj) {
    qlikObj.exportData().then(reply => {
      //console.log(reply)

      let baseUri = (this.config.isSecure ? "https://" : "http://") + this.config.host + (this.config.port ? ":" + this.config.port : "") + this.config.prefix;
      let dataUri = baseUri + reply.qUrl.substr(1);
      let fileName = "Data.xlsx";

      var a = document.createElement("a");
      a.style = "display:none";
      a.href = dataUri;
      a.download = fileName;
      a.click();
      console.log("Report downloaded");
    });
  }

  createFilterList(filter) {
    return this.app.visualization.create(
      'listbox',
      [filter.field],
      {
        "showTitle": true,
        "title": filter.title
      }
    )
  }

  destroy(qlikObj) {
    qlikObj.forEach(obj => {
      if (obj && obj.id) {
        this.app.destroySessionObject(obj.id);
      }
    });
  }
}
