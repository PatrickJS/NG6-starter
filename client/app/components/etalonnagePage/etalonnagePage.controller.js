class etalonnagePageController {

  /**
 * @param {qlikService} qlikService
 * @param {utilService} utilService
 */
  constructor(qlikService, utilService) {
    'ngInject';

    //Setup qlik Service
    this.qlikService = qlikService;
    this.utilService = utilService;
    this.showRightMenu = false;
    this.showCostStack = false;

    //Setup view mode, chart by default
    this.viewMode = 'chart';

    //Setup table mode, # by default
    this.tableMode = '#';
  }

  $onInit() {
    //Create charts
    let windowHeight = $(window).height(),
      offset = 493;
    $('#QV01').css("height", (windowHeight - offset) * 0.6);
    $('#QV02').css("height", (windowHeight - offset) * 0.4);
    $('#QV03a').css("height", (windowHeight - offset) + 97);
    $('#QV03b').css("height", (windowHeight - offset) + 97);
    $('#QV04').css("height", (windowHeight - offset) * 0.4);
    $('#QV05').css("height", (windowHeight - offset) * 0.4);

    this.qlikService.getVisualization("QV01", this.config["etalonnage-main-chart"]);
    this.qlikService.getVisualization("QV02", this.config["etalonnage-sub-chart"]);
    this.qlikService.getVisualization("QV04", this.config["etalonnage-sub-chart-2"]);
    this.qlikService.getVisualization("QV05", this.config["etalonnage-cost-chart"]);
    this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");

    this.setStackMode("#");

    //Bind Reference values to each measure tile in right menu
    this.qlikService.bindVisualizationData(this.config["etalonnage-ref-values"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix[0];

      let measureData = data.map((cell, index) => ({
        name: cube.qHyperCube.qMeasureInfo[index].qFallbackTitle,
        value: cell.qText
      }));

      this.config.measures = this.config.measures.map(measure => {
        let newMeasure = measure;
        let hit = measureData.filter(d => d.name === measure.title);

        if (hit.length > 0) {
          newMeasure.subtitle = ((this.refType && this.refType.value === 2) ? "MÉD. " : "MOY. ") + hit[0].value;
        }
        return newMeasure;
      });

      this.showRightMenu = true;
    });

    //Bind # table view to the page
    this.tableObj = this.qlikService.bindVisualizationData(this.config["etalonnage-sharp-table"], cube => {
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
    });

    //Bind % table view to the page
    this.tableObj = this.qlikService.bindVisualizationData(this.config["etalonnage-percentage-table"], cube => {
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
    });

    //Bind legend values to stack bar chart
    this.qlikService.bindVisualizationData(this.config["etalonnage-sub-chart-legend"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.legendList = data.map(row => ({
        value: row[0].qText,
        color: row[1].qText
      }));
    });

    //Bind legend values to stack bar chart for Type de coût
    this.qlikService.bindVisualizationData(this.config["etalonnage-sub-chart-2-legend"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.legendList2 = data.map(row => ({
        value: row[0].qText,
        color: row[1].qText
      }));
    });

  }

  exportTable() {
    //this.tableObj.then(model => { debugger })

    this.tableObj.then(model => this.qlikService.exportData(model));

  }

  setChartView() {
    this.viewMode = 'chart';
    this.qlikService.resize();
  }
  setTableView() {
    this.viewMode = 'table';
  }

  setHashtagTable() {
    this.qlikService.setVariable(this.config["table-mode-variable"], '#')
      .then(() => this.tableMode = '#');
  }

  setPercentageTable() {
    this.qlikService.setVariable(this.config["table-mode-variable"], '%')
      .then(() => this.tableMode = '%');
  }

  setStackMode(mode) {
    this.qlikService.setVariable(this.config["stack-mode-variable"], mode)
      .then(() => {
        this.stackMode = mode;
      });
  }

  onCostTypeChanged(costType) {
    this.costType = costType;
    this.qlikService.setVariable(this.config["cost-type-variable"], costType.value);
  }

  onStreamChanged(streams) {
    this.streams = streams;
  }

  onMeasureChanged(measure) {
    this.measure = measure[0];
  }

  onDimensionChanged(dimension) {
    this.dimension = dimension;
    this.qlikService.select(this.config["dimension-field"], [dimension.value]);
  }

  onStackChanged(stack) {
    this.stack = stack;

    this.showCostStack = stack.value === "Type de coûts";

    this.qlikService.select(this.config["stack-field"], [stack.value]);
    this.qlikService.resize();
  }

  onRefTypeChanged(refType) {
    this.refType = refType;
    this.qlikService.setVariable(this.config["ref-type-variable"], refType.value);
  }

}

export default etalonnagePageController;
