class menuTabRightController {
  constructor() {
    this.name = 'menuTabRight';

    let _this = this;

    _this.$onInit = () => {
      _this.dimension = _this.dimensionList[0];
      _this.stack = _this.stackList[0];
      _this.refType = _this.refTypeList[0];
      _this.costType = _this.costTypeList[0];
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
