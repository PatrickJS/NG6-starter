class ComparaisonsPageController {
  /**
 * @param {qlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;
    _this.showRightMenu = false;

    //Setup qlik Service
    _this.qlikService = qlikService;

    //Setup view mode, chart by default
    _this.viewMode = 'chart';
    _this.setChartView = () => {
      _this.viewMode = 'chart';
      _this.qlikService.resize();
    }
    _this.setTableView = () => {
      _this.viewMode = 'table';
    }

    //Setup stack mode
    _this.stackMode = '#';
    _this.setStackMode = mode => {
      _this.stackMode = mode;
      qlikService.resize();
    }

    //Setup change listener from control tab [Right tab]
    _this.onStreamChanged = streams => {
      _this.streams = streams;
      // qlikService.select(_this.config["stream-field"], [stream.value]);
      // qlikService.select(_this.config["stream-field"], [stream.value], "GrRef");
      // qlikService.select(_this.config["stream-field"], [stream.value], "GrComp");
    };

    _this.onMeasureChanged = measure => {
      _this.measure = measure[0];
    };

    _this.onDimensionChanged = dimension => {
      _this.dimension = dimension;

      qlikService.select(_this.config["dimension-field"], [dimension.value]);
      qlikService.select(_this.config["dimension-field"], [dimension.value], "GrRef");
      qlikService.select(_this.config["dimension-field"], [dimension.value], "GrComp");
    };

    _this.onStackChanged = stack => {
      _this.stack = stack;
      qlikService.select(_this.config["stack-field"], [stack.value]);
    };

    _this.onRefTypeChanged = refType => {
      _this.refType = refType;
      qlikService.setVariable(_this.config["ref-type-variable"], refType.value);
    };

    _this.onCostTypeChanged = costType => {
      _this.costType = costType;
      qlikService.setVariable(_this.config["cost-type-variable"], costType.value);
    };

    _this.$onInit = () => {
      //Initial Selections
      // _this.qlikService.applyBookmark(_this.config['startup-bookmark']);

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

      _this.qlikService.getVisualization("QV02", _this.config["comparaisons-kpi-chart"]);
      _this.qlikService.getVisualization("QV03", _this.config["comparaisons-distribution-#-chart"]);
      _this.qlikService.getVisualization("QV04", _this.config["comparaisons-distribution-%-chart"]);

      _this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");

      //Setup Écarts Table
      //Ref column data
      _this.qlikService.bindVisualizationData(_this.config["comparaisons-group-ref-values"], cube => {
        let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
        let measures = cube.qHyperCube.qMeasureInfo;

        _this.refTableData = data.map((cell, index) => ({
          title: measures[index].qFallbackTitle,
          value: cell.qText
        }));
      });
      //Comp column data
      _this.qlikService.bindVisualizationData(_this.config["comparaisons-group-comp-values"], cube => {

        let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
        let measures = cube.qHyperCube.qMeasureInfo;

        _this.compTableData = data.map((cell, index) => ({
          title: measures[index].qFallbackTitle,
          value: cell.qText
        }));
      });
      //écart column data
      _this.qlikService.bindVisualizationData(_this.config["comparaisons-group-ecart-values"], cube => {
        let data = cube.qHyperCube.qDataPages[0].qMatrix[0];
        let measures = cube.qHyperCube.qMeasureInfo;

        _this.ecartTableData = data.map((cell, index) => ({
          title: measures[index].qFallbackTitle,
          value: cell.qText
        }));
      });

      //Table view data
      _this.qlikService.bindVisualizationData(_this.config["comparaisons-table"], cube => {
        let data = cube.qHyperCube.qDataPages[0].qMatrix;

        _this.tableData = data.map(row => (row.map(cell => cell.qText)));

        let headers = [];
        cube.qHyperCube.qDimensionInfo.map(dimension => {
          headers.push(dimension.qFallbackTitle);
        });
        cube.qHyperCube.qMeasureInfo.map(measure => {
          headers.push(measure.qFallbackTitle);
        });

        _this.tableHeaders = headers;

        _this.showRightMenu = true;
      });
    }
  }
}

export default ComparaisonsPageController;
