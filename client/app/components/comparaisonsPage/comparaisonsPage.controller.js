class ComparaisonsPageController {
  /**
 * @param {qlikService} qlikService
 * @param {utilService} utilService
 */
  constructor(qlikService, utilService) {
    'ngInject';

    this.qlikService = qlikService;
    this.utilService = utilService;

    this.showRightMenu = false;

    //Setup view mode, chart by default
    this.viewMode = 'chart';

    //Setup stack mode
    this.stackMode = '#';
  }

  setChartView() {
    this.viewMode = 'chart';
    this.qlikService.resize();
  }
  setTableView() {
    this.viewMode = 'table';
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
    this.qlikService.select(this.config["stack-field"], [stack.value]);
  }

  onRefTypeChanged(refType) {
    this.refType = refType;
    this.qlikService.setVariable(this.config["ref-type-variable"], refType.value);
  }

  onCostTypeChanged(costType) {
    this.costType = costType;
    this.qlikService.setVariable(this.config["cost-type-variable"], costType.value);
  }

  $onInit() {
    let windowHeight = $(window).height(),
      offset = 296;

    //Écarts table
    $('#QV01').css("height", (windowHeight - offset));

    offset = 463;
    //KPI compare chart
    $('#QV02').css("height", (windowHeight - offset) * 0.5);

    //Distribution stack chart
    $('#QV03').css("height", (windowHeight - offset) * 0.5);
    $('#QV04').css("height", (windowHeight - offset) * 0.5);

    $('#QV05').css("height", (windowHeight - offset) + 97);

    this.qlikService.getVisualization("QV02", this.config["comparaisons-kpi-chart"]);
    this.qlikService.getVisualization("QV03", this.config["comparaisons-distribution-#-chart"]);
    this.qlikService.getVisualization("QV04", this.config["comparaisons-distribution-%-chart"]);

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

      this.refTableData = refTableData.map(row => {
        row.visible = measureList.map(m => m.title).indexOf(row.title) > -1;
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
        headers.push(dimension.qFallbackTitle);
      });

      //Determine which fields to be visible in table view according to selected streams
      let visibles = [];
      visibles = visibles.concat(this.utilService.getMeasuresByStreams(this.streams, this.config.measures).map(measure => measure.title));

      cube.qHyperCube.qMeasureInfo.map(measure => {
        let title = measure.qFallbackTitle;
        headers.push({
          title,
          visible: visibles.indexOf(title) > 0
        });
      });

      this.tableHeaders = headers;

      this.showRightMenu = true;
    });
  }
}

export default ComparaisonsPageController;
