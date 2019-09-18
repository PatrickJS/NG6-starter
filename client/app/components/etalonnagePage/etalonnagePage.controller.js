import stateService from "../../services/stateService";

class etalonnagePageController {

  /**
 * @param {qlikService} qlikService
 * @param {utilService} utilService
 * @param {stateService} stateService
 */
  constructor(qlikService, utilService, stateService) {
    'ngInject';

    //Setup qlik Service
    this.qlikService = qlikService;
    this.utilService = utilService;
    this.stateService = stateService;
    this.showRightMenu = false;
    this.showCostStack = false;

    this.qlikObj = [];
  }

  $onInit() {
    //Get states
    this.viewMode = this.stateService.getState('viewMode');
    this.tableMode = this.stateService.getState('tableMode');
    this.refType = this.utilService.getTypeByValue(this.stateService.getState('refType'), this.config.refTypes);
    this.stackMode = this.stateService.getState('stackMode');

    //calculate chart sizes
    let resizer = () => {
      let windowHeight = $(window).height(), offset = 493;
      let pageHeight = (windowHeight - offset);
      pageHeight = pageHeight < 500 ? 500 : pageHeight;

      $('#QV01').css("height", pageHeight * 0.6);
      $('#QV02').css("height", pageHeight * 0.4);
      $('#QV03a').css("height", pageHeight + 97);
      $('#QV03b').css("height", pageHeight + 97);
      $('#QV04').css("height", pageHeight * 0.4);
      $('#QV05').css("height", pageHeight * 0.4);
      $('#QV06').css("height", pageHeight * 0.4);
    };

    resizer();
    $(window).resize(resizer);

    //Create charts
    this.qlikService.getVisualization("QV01", this.config["etalonnage-main-chart"]);
    this.qlikService.getVisualization("QV02", this.config["etalonnage-sub-chart"]);
    this.qlikService.getVisualization("QV04", this.config["etalonnage-sub-chart-2"]);
    this.qlikService.getVisualization("QV05", this.config["etalonnage-cost-chart"]);
    this.qlikService.getVisualization("QV06", this.config["etalonnage-cost-chart-2"]);
    this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");

    //Bind Reference values to each measure tile in right menu
    this.qlikService.bindVisualizationData(this.config["etalonnage-ref-values"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix[0];

      let measureData = data.map((cell, index) => ({
        name: cube.qHyperCube.qMeasureInfo[index].qFallbackTitle,
        value: cell.qText
      }));

      this.config.measures = this.config.measures.map(measure => {
        let newMeasure = measure;
        let hit = measureData.filter(d => d.name === measure.value);

        if (hit.length > 0) {
          newMeasure.subtitle = ((this.refType && this.refType.value === 2) ? "MÉD. " : "MOY. ") + hit[0].value;
        }
        return newMeasure;
      });

      this.showRightMenu = true;
    }).then(object => this.qlikObj.push(object));

    //Bind # table view to the page
    this.sharpTableObj = this.qlikService.bindVisualizationData(this.config["etalonnage-sharp-table"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.sharpTableData = data.map(row => (row.map(cell => cell.qText)));

      let headers = [];
      cube.qHyperCube.qDimensionInfo.map(dimension => {
        headers.push({
          title: dimension.qFallbackTitle,
          visible: true
        });
      });

      //Determine which fields to be visible in table view according to selected streams
      let visibles = ['Coût directs', 'Coût indirects'];
      visibles = visibles.concat(this.utilService.getMeasuresByStreams(this.streams, this.config.measures).map(measure => measure.title));

      cube.qHyperCube.qMeasureInfo.map(measure => {
        let title = measure.qFallbackTitle;
        headers.push({
          title,
          visible: visibles.indexOf(title) > 0
        });
      });

      this.sharpTableHeaders = headers;

      this.qlikService.resize();
    })
    this.sharpTableObj.then(object => this.qlikObj.push(object));

    //Bind % table view to the page
    this.perentageTableObj = this.qlikService.bindVisualizationData(this.config["etalonnage-percentage-table"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.percentageTableData = data.map(row => (row.map(cell => cell.qText)));

      let headers = [];
      cube.qHyperCube.qDimensionInfo.map(dimension => {
        headers.push({
          title: dimension.qFallbackTitle,
          visible: true
        });
      });

      //Determine which fields to be visible in table view according to selected streams
      let visibles = ['Coût directs', 'Coût indirects'];
      visibles = visibles.concat(this.utilService.getMeasuresByStreams(this.streams, this.config.measures).map(measure => measure.title));

      cube.qHyperCube.qMeasureInfo.map(measure => {
        let title = measure.qFallbackTitle;
        headers.push({
          title,
          visible: visibles.indexOf(title) > 0
        });
      });

      this.percentageTableHeaders = headers;

      this.qlikService.resize();
    });
    this.perentageTableObj.then(object => this.qlikObj.push(object));

    //Bind legend values to stack bar chart
    this.qlikService.bindVisualizationData(this.config["etalonnage-sub-chart-legend"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.legendList = data.map(row => ({
        value: row[0].qText,
        color: row[1].qText
      }));

      this.legendField = cube.qHyperCube.qDimensionInfo[0].qFallbackTitle;
    }).then(object => this.qlikObj.push(object));

    //Bind legend values to stack bar chart for Type de coût
    this.qlikService.bindVisualizationData(this.config["etalonnage-cost-chart-legend"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.legendList2 = data.map(row => ({
        value: row[0].qText,
        color: row[1].qText
      }));
      this.legendField2 = cube.qHyperCube.qDimensionInfo[0].qFallbackTitle;
    }).then(object => this.qlikObj.push(object));
  }

  exportTable() {
    //this.tableObj.then(model => { debugger })
    if (this.tableMode === '%') {
      this.perentageTableObj.then(model => this.qlikService.exportData(model));
    } else {
      this.sharpTableObj.then(model => this.qlikService.exportData(model));
    }


  }

  setChartView() {
    this.viewMode = this.stateService.setState('viewMode', 'chart');
    this.qlikService.resize();
  }
  setTableView() {
    this.viewMode = this.stateService.setState('viewMode', 'table');
  }

  setHashtagTable() {
    this.qlikService.setVariable(this.config["table-mode-variable"], '#')
      .then(() => this.tableMode = this.stateService.setState('tableMode', '#'));
  }

  setPercentageTable() {
    this.qlikService.setVariable(this.config["table-mode-variable"], '%')
      .then(() => this.tableMode = this.stateService.setState('tableMode,', '%'));
  }

  setStackMode(mode) {
    this.qlikService.setVariable(this.config["stack-mode-variable"], mode)
      .then(() => {
        this.stackMode = this.stateService.setState('stackMode', mode);
      });
  }

  onRefTypeChanged(refType) {
    this.refType = refType;
    this.qlikService.setVariable(this.config["ref-type-variable"], refType.value)
      .then(() => this.stateService.setState('refType', refType.value));
  }

  onCostTypeChanged(costType) {
    this.costType = costType;
    this.qlikService.setVariable(this.config["cost-type-variable"], costType.value)
      .then(() => this.stateService.setState('costType', costType.value));
  }

  onStreamChanged(streams) {
    this.streams = streams;
  }

  onMeasureChanged(measure) {
    //this.measure = measure[0];
  }

  onDimensionChanged(dimension) {
    //this.dimension = dimension;
    this.qlikService.select(this.config["dimension-field"], [dimension.value]);
  }

  onStackChanged(stack) {
    //this.stack = stack;

    this.showCostStack = stack.value === "Type de coûts";

    let value;
    if (stack.value === "Groupes d’âge normaux") {
      value = this.stateService.getState('ageMode').title;
    } else {
      value = stack.value;
    }

    this.qlikService.select(this.config["stack-field"], [value]);
    this.qlikService.resize();
  }

  $onDestroy() {
    console.log('etalonnagePage component Destroyed');

    this.qlikService.destroy(this.qlikObj);
  }
}

export default etalonnagePageController;
