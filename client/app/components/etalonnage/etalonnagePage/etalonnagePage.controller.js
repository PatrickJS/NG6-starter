class etalonnagePageController {

  /**
 * @param {QlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;

    _this.qlikService = qlikService;

    _this.$onInit = () => {

      //Create Main chart
      let windowHeight = $("body").height(),
        offset = 463;
      $('#QV01').css("height", (windowHeight - offset) * 0.6);
      $('#QV02').css("height", (windowHeight - offset) * 0.4);
      _this.qlikService.getVisualization("QV01", _this.config["etalonnage-main-chart"]);
      _this.qlikService.getVisualization("QV02", _this.config["etalonnage-sub-chart"]);
      _this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");
    }


    _this.onStreamChanged = stream => {
      _this.stream = stream;
      qlikService.select(_this.config["stream-field"], stream.value);
    };

    _this.onMeasureChanged = measure => {
      _this.measure = measure;
      qlikService.select(_this.config["measure-field"], measure.value);
    };

    _this.onDimensionChanged = dimension => {
      _this.dimension = dimension;
      qlikService.select(_this.config["dimension-field"], dimension.value);
    };

    _this.onStackChanged = stack => {
      _this.stack = stack;
      qlikService.select(_this.config["stack-field"], stack.value);
    };
  }
}

export default etalonnagePageController;
