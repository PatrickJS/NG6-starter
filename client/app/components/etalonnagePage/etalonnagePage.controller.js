class etalonnagePageController {

  /**
 * @param {QlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;

    //Setup qlik Service
    _this.qlikService = qlikService;
    _this.showRightMenu = false;

    //Setup view mode, chart by default
    _this.viewMode = 'chart';
    _this.setChartView = () => {
      _this.viewMode = 'chart';
      _this.qlikService.resize();
    }
    _this.setTableView = () => {
      _this.viewMode = 'table';
    }

    _this.stacks = [];

    //Setup table mode, # by default
    _this.tableMode = '#';
    _this.setHashtagTable = () =>
      _this.qlikService.setVariable(_this.config["table-mode-variable"], '#')
        .then(() => _this.tableMode = '#');

    _this.setPercentageTable = () =>
      _this.qlikService.setVariable(_this.config["table-mode-variable"], '%')
        .then(() => _this.tableMode = '%');

    //Setup change listener from control tab [Right tab]
    _this.onStreamChanged = streams => {
      _this.streams = streams;
    };

    _this.onMeasureChanged = measure => {
      _this.measure = measure;
      qlikService.select(_this.config["measure-field"], [measure.value]);
    };

    _this.onDimensionChanged = dimension => {
      _this.dimension = dimension;
      qlikService.select(_this.config["dimension-field"], [dimension.value]);
    };

    _this.onStackChanged = stack => {
      _this.stack = stack;
      if (stack.value) {
        if (_this.stackMode === "!") {
          _this.setStackMode("$");
        }

        qlikService.select(_this.config["stack-field"], [stack.value]);
      }
      //Special chart for cost distribution
      else {
        _this.setStackMode("!");
      }

      qlikService.resize();
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
      //Create charts
      let windowHeight = $(window).height(),
        offset = 463;
      $('#QV01').css("height", (windowHeight - offset) * 0.6);
      $('#QV02').css("height", (windowHeight - offset) * 0.4);
      $('#QV03').css("height", (windowHeight - offset) + 97);
      $('#QV04').css("height", (windowHeight - offset) * 0.4);
      $('#QV05').css("height", (windowHeight - offset) * 0.4);

      _this.qlikService.getVisualization("QV01", _this.config["etalonnage-main-chart"]);
      _this.qlikService.getVisualization("QV02", _this.config["etalonnage-sub-chart"]);
      _this.qlikService.getVisualization("QV04", _this.config["etalonnage-sub-chart-2"]);
      _this.qlikService.getVisualization("QV05", _this.config["etalonnage-cost-chart"]);
      _this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");

      _this.setStackMode = mode =>
        _this.qlikService.setVariable(_this.config["stack-mode-variable"], mode)
          .then(() => {
            let hits = _this.config["stack-mode"].filter(m => m.title === mode);

            let stacks = [];
            if (hits.length > 0) {
              hits[0].stacks.map(id => {
                stacks = stacks.concat(_this.config["stacks"].filter(s => s.id === id));
              });
            }
            _this.stacks = stacks;
            _this.stackMode = mode;
          });

      _this.setStackMode("#");

      _this.qlikService.bindVisualizationData(_this.config["etalonnage-ref-values"], cube => {
        let data = cube.qHyperCube.qDataPages[0].qMatrix[0];

        let measureData = data.map((cell, index) => ({
          name: cube.qHyperCube.qMeasureInfo[index].qFallbackTitle,
          value: cell.qText
        }));

        _this.config.measures = _this.config.measures.map(measure => {
          let newMeasure = measure;
          let hit = measureData.filter(d => d.name === measure.title);

          if (hit.length > 0) {
            newMeasure.subtitle = ((_this.refType && _this.refType.value === 2) ? "MED " : "MOY ") + hit[0].value;
          }
          return newMeasure;
        });

        _this.showRightMenu = true;
      });

      _this.qlikService.bindVisualizationData(_this.config["etalonnage-table"], cube => {
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
      });


    }
  }
}

export default etalonnagePageController;
