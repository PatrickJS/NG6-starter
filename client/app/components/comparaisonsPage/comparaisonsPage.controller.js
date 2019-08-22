class ComparaisonsPageController {
  /**
 * @param {QlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;

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

    //Setup change listener from control tab [Right tab]
    _this.onStreamChanged = stream => {
      _this.stream = stream;
      qlikService.select(_this.config["stream-field"], stream.value);
    };

    _this.$onInit = () => {
      //console.log(_this.config)

      let windowHeight = $("body").height(),
        offset = 296

      $('#QV01').css("height", (windowHeight - offset));

      _this.qlikService.getVisualization("CurrentSelections", "CurrentSelections");
    }
  }
}

export default ComparaisonsPageController;
