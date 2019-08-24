class menuTabRightController {
  /**
* @param {QlikService} qlikService
*/
  constructor(qlikService) {
    'ngInject';
    this.name = 'menuTabRight';

    let _this = this;

    _this.$onInit = () => {
      _this.dimension = _this.dimensionList[0];
      _this.stack = _this.stackList[0];
      _this.refType = _this.refTypeList[0];
      _this.costType = _this.costTypeList[0];

      if (_this.refList)
        qlikService.getVisualization("LIST01", _this.refList).then(model => {
          _this.refGroupCount = model.layout.title;

          $('.reference-lists').find('.ref-list').click(function (e) {
            var $this = $(this);

            if ($this.hasClass('active')) {
              if ($(e.target).parents('.ref-dropdown-wrap').length === 0) {
                $this.removeClass('active');
                $this.children('.ref-dropdown').slideUp();
                qlikService.resize();
              }
            } else {
              $('.ref-list').removeClass('active');
              $this.parents().find('.ref-dropdown').slideUp();
              $this.addClass('active');
              $this.children('.ref-dropdown').slideDown();
              qlikService.resize();
            }
          });

          model.Validated.bind(function () {
            _this.refGroupCount = model.layout.title;
          });
        });

      if (_this.compList)
        qlikService.getVisualization("LIST02", _this.compList).then(model => {
          _this.compGroupCount = model.layout.title;
          model.Validated.bind(function () {
            _this.compGroupCount = model.layout.title;
          });
        });
    };

    _this.$onChanges = changeObj => {
      if (changeObj.stream && changeObj.stream.currentValue) {
        _this.measures = getTiles(_this.stream, _this.measureList);
        if (_this.measures && _this.measures.length > 0 && _this.measures.indexOf(_this.measure) < 0) {
          _this.measure = _this.measures[0];
          _this.onMeasureChanged({ measure: _this.measures[0] });
        }
      }
    };

    _this.selectMeasure = measure => {
      _this.measure = measure;
      _this.onMeasureChanged({ measure });
    };

    _this.selectFilter = stack => {
      _this.stack = stack;
      _this.onStackChanged({ stack });
    };

    _this.selectDimension = dimension => {
      _this.dimension = dimension;
      _this.onDimensionChanged({ dimension });
    };

    _this.selectRefType = selected => {
      _this.refType = selected;
      _this.onRefTypeChanged({ refType: _this.refType });
    };

    _this.selectCostType = selected => {
      _this.costType = selected;
      _this.onCostTypeChanged({ costType: _this.costType });
    };
  }
}

function getTiles(stream, measureList) {
  return measureList.filter(measure => stream.measures.indexOf(measure.id) > -1);
}

export default menuTabRightController;
