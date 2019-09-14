class ComparaisonsPageController {
  /**
 * @param {qlikService} qlikService
 * @param {utilService} utilService
 * @param {stateService} stateService
 */
  constructor(qlikService, utilService, stateService) {
    'ngInject';

    this.qlikService = qlikService;
    this.utilService = utilService;
    this.stateService = stateService;

    this.showRightMenu = false;
    this.showCostStack = false;
  }

  $onInit() {
    //Setup state
    this.viewMode = this.stateService.getState('viewMode');
    this.tableMode = this.stateService.getState('tableMode');
    this.stackMode = '#';
    this.refType = this.utilService.getTypeByValue(this.stateService.getState('refType'), this.config.refTypes);

    let windowHeight = $(window).height(),
      offset = 296;

    //Écarts table
    $('#QV01').css("height", (windowHeight - offset));

    offset = 493;
    //KPI compare chart
    $('#QV02').css("height", (windowHeight - offset) * 0.5);

    //Distribution stack chart
    $('#QV03a').css("height", (windowHeight - offset) * 0.5);
    $('#QV03b').css("height", (windowHeight - offset) * 0.5);
    $('#QV04a').css("height", (windowHeight - offset) * 0.5);
    $('#QV04b').css("height", (windowHeight - offset) * 0.5);
    $('#QV05').css("height", (windowHeight - offset) + 97);

    this.qlikService.getVisualization("QV02", this.config["comparaisons-kpi-chart"]);
    this.qlikService.getVisualization("QV03a", this.config["comparaisons-distribution-#-chart"]);
    this.qlikService.getVisualization("QV03b", this.config["comparaisons-distribution-#-chart-cost"]);
    this.qlikService.getVisualization("QV04a", this.config["comparaisons-distribution-%-chart"]);
    this.qlikService.getVisualization("QV04b", this.config["comparaisons-distribution-%-chart-cost"]);

    this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");

    //Setup Écarts Table
    //Ref column data
    this.qlikService.bindVisualizationData(this.config["comparaisons-group-ref-values"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
      let measures = cube.qHyperCube.qMeasureInfo;

      let refTableData = data.map((cell, index) => ({
        title: measures[index].qFallbackTitle,
        value: cell.qText
      }));

      let measureList = this.utilService.getMeasuresByStreams(this.streams, this.config.measures);

      //Special handling of Coût moyen and Coût médiane
      this.refTableData = refTableData.map(row => {
        if (this.refType && (row.title === 'Coût moyen' || row.title === 'Coût médiane')) {
          row.visible = (this.refType.value === 1 && row.title === 'Coût moyen') || (this.refType.value === 2 && row.title === 'Coût médiane')
        } else {
          row.visible = measureList.map(m => m.title).indexOf(row.title) > -1;
        }

        return row;
      });
    });
    //Comp column data
    this.qlikService.bindVisualizationData(this.config["comparaisons-group-comp-values"], cube => {

      let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
      let measures = cube.qHyperCube.qMeasureInfo;

      this.compTableData = data.map((cell, index) => ({
        title: measures[index].qFallbackTitle,
        value: cell.qText
      }));
    });
    //écart column data
    this.qlikService.bindVisualizationData(this.config["comparaisons-group-ecart-values"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
      let measures = cube.qHyperCube.qMeasureInfo;

      this.ecartTableData = data.map((cell, index) => ({
        title: measures[index].qFallbackTitle,
        value: cell.qText
      }));
    });

    //Table view data
    this.qlikService.bindVisualizationData(this.config["comparaisons-table"], cube => {
      let data = cube.qHyperCube.qDataPages[0].qMatrix;

      this.tableData = data.map(row => (row.map(cell => cell.qText)));

      let headers = [];
      cube.qHyperCube.qDimensionInfo.map(dimension => {
        headers.push({
          title: dimension.qFallbackTitle,
          visible: true
        });
      });

      //Determine which fields to be visible in table view according to selected streams
      let visibles = [];
      visibles = visibles.concat(this.utilService.getMeasuresByStreams(this.streams, this.config.measures).map(measure => measure.title));

      cube.qHyperCube.qMeasureInfo.map(measure => {
        let title = measure.qFallbackTitle;
        let visible;

        //Special handling of Coût moyen and Coût médiane
        if (this.refType && (title === 'Coût moyen' || title === 'Coût médiane')) {
          visible = (this.refType.value === 1 && title === 'Coût moyen') || (this.refType.value === 2 && title === 'Coût médiane')
        } else {
          visible = visibles.indexOf(title) > -1;
        }

        headers.push({
          title,
          visible
        });
      });

      this.tableHeaders = headers;

      this.showRightMenu = true;
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


  setChartView() {
    this.viewMode = this.stateService.setState('viewMode', 'chart');
    this.qlikService.resize();
  }
  setTableView() {
    this.viewMode = this.stateService.setState('viewMode', 'table');
  }

  setStackMode(mode) {
    this.stackMode = mode;
    this.qlikService.resize();
  }

  //Setup change listener from control tab [Right tab]
  onStreamChanged(streams) {
    this.streams = streams;
    // qlikService.select(this.config["stream-field"], [stream.value]);
    // qlikService.select(this.config["stream-field"], [stream.value], "GrRef");
    // qlikService.select(this.config["stream-field"], [stream.value], "GrComp");
  }

  onMeasureChanged(measure) {
    this.measure = measure[0];
  }

  onDimensionChanged(dimension) {
    this.dimension = dimension;

    this.qlikService.select(this.config["dimension-field"], [dimension.value]);
    this.qlikService.select(this.config["dimension-field"], [dimension.value], "GrRef");
    this.qlikService.select(this.config["dimension-field"], [dimension.value], "GrComp");
  }

  onStackChanged(stack) {
    this.stack = stack;

    this.showCostStack = stack.value === "Type de coûts";

    let value;
    if (stack.value === "Groupes d’âge normaux") {
      value = this.stateService.getState('ageMode').title;
    } else {
      value = stack.value;
    }

    this.qlikService.select(this.config["stack-field"], [value]);
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
}

export default ComparaisonsPageController;
