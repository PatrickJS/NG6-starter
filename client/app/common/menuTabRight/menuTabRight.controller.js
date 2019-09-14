class menuTabRightController {
  /**
* @param {qlikService} qlikService
* @param {utilService} utilService
* @param {stateService} stateService
*/
  constructor(qlikService, utilService, stateService) {
    'ngInject';
    this.name = 'menuTabRight';

    this.qlikService = qlikService;
    this.utilService = utilService;
    this.stateService = stateService;
  }

  $onInit() {
    let _this = this;

    if (this.showCompare)
      this.qlikService.getVisualization("LIST01", this.qlikConfig['group-ref-list']).then(model => {
        this.refGroupCount = model.layout.title;

        $('.reference-lists').find('.ref-list').click(function (e) {
          var $this = $(this);

          if ($this.hasClass('active')) {
            if ($(e.target).parents('.ref-dropdown-wrap').length === 0) {
              $this.removeClass('active');
              $this.children('.ref-dropdown').slideUp();
              _this.qlikService.resize();
            }
          } else {
            $('.ref-list').removeClass('active');
            $this.parents().find('.ref-dropdown').slideUp();
            $this.addClass('active');
            $this.children('.ref-dropdown').slideDown();
            _this.qlikService.resize();
          }
        });

        model.Validated.bind(() => {
          _this.refGroupCount = model.layout.title;
        });
      });

    if (this.showCompare)
      this.qlikService.getVisualization("LIST02", this.qlikConfig['group-comp-list']).then(model => {
        this.compGroupCount = model.layout.title;
        model.Validated.bind(() => {
          _this.compGroupCount = model.layout.title;
        });
      });

    //refType handling
    this.refType = this.utilService.getTypeByValue(this.stateService.getState('refType'), this.qlikConfig.refTypes);
    this.onRefTypeChanged({refType : this.refType});

    //costType handling
    this.costType = this.utilService.getTypeByValue(this.stateService.getState('costType'), this.qlikConfig.costTypes);
    this.onCostTypeChanged({costType : this.costType});

    //Dimension handling
    this.dimensionFieldListener = () => {
      this.dimensionField.rows.forEach(row => {
        this.qlikConfig.dimensions.forEach(dimension => {
          if (row.qText === dimension.value) {
            dimension.selected = row.qState === 'S';
          }
        });
      });
    };
    this.dimensionField = this.qlikService.field([this.qlikConfig["dimension-field"]], this.dimensionFieldListener);

    //Measure handling
    this.measureFieldListener = () => {
      this.measureField.rows.forEach(row => {
        this.measures.forEach(measure => {
          if (row.qText === measure.value) {
            measure.selected = row.qState === 'S';
          }
        });
      });

      this.onMeasureChanged({ measure: this.measures.filter(m => m.selected) });
    };
    this.measureField = this.qlikService.field([this.qlikConfig["measure-field"]], this.measureFieldListener);

    //Stack handling
    this.stackFieldListener = () => {
      this.qlikConfig.stacks.forEach(stack => {
        let selected = false;
        let hits = this.stackField.rows.filter(row => row.qText === stack.value || (stack.alt && stack.alt.indexOf(row.qText) > -1));

        hits.forEach(hit => {
          if(hit.qState === 'S'){
            selected = true;
          }
        });

        stack.selected = selected;
      });
    };
    this.stackField = this.qlikService.field([this.qlikConfig["stack-field"]], this.stackFieldListener);
  }

  $onChanges(changeObj) {
    if (changeObj.streams && changeObj.streams.currentValue) {
      this.measures = this.utilService.getMeasuresByStreams(this.streams, this.qlikConfig.measures);
      this.stacks = this.utilService.getStacksByStreams(this.streams, this.qlikConfig.stacks);
    }
  }

  selectMeasure(measure) {
    this.measure = measure;
    this.measureField.selectValues([measure.value]);
  }

  selectFilter(stack) {
    this.stack = stack;
    this.onStackChanged({ stack });
  }

  selectDimension(dimension) {
    this.dimension = dimension;
    this.onDimensionChanged({ dimension });
  }

  selectRefType(selected) {
    this.refType = selected;
    this.onRefTypeChanged({ refType: this.refType });
  }

  selectCostType(selected) {
    this.costType = selected;
    this.onCostTypeChanged({ costType: this.costType });
  }

  $onDestroy() {
    this.dimensionField.OnData.unbind(this.dimensionFieldListener);
    this.measureField.OnData.unbind(this.measureFieldListener);
    this.stackField.OnData.unbind(this.stackFieldListener);
  }
}

export default menuTabRightController;
