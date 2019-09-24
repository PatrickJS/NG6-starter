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

    this.$onDestroy = () => {
      console.log('menuTabRight component Destroyed');
      if (this.showCompare) {
        this.refGroupCountModelEstab.Validated.unbind(this.refGroupCountEstabListener);
        this.refGroupCountModelInst.Validated.unbind(this.refGroupCountInstListener);
        this.compGroupCountModelEstab.Validated.unbind(this.compGroupCountEstabListener);
        this.compGroupCountModelInst.Validated.unbind(this.compGroupCountInstListener);
      }

      this.dimensionField.OnData.unbind(this.dimensionFieldListener);
      this.measureField.OnData.unbind(this.measureFieldListener);
      this.stackField.OnData.unbind(this.stackFieldListener);
    }
  }



  $onInit() {
    let _this = this;
    let measure = this.stateService.getState('measure');
    let dimension = this.stateService.getState('dimension');
    let stack = this.stateService.getState('stack');

    if (measure) this.measure = measure;
    if (dimension) this.dimension = dimension;
    if (stack) this.stack = stack;

    if (this.showCompare)
      this.qlikService.getVisualization("LIST01a", this.qlikConfig['group-ref-list-estab']).then(model => {
        this.refGroupCountModelEstab = model;
        this.refGroupCountEstab = model.layout.title;

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

        this.refGroupCountEstabListener = () => {
          _this.refGroupCountEstab = model.layout.title;
        };
        model.Validated.bind(this.refGroupCountEstabListener);
      });

    if (this.showCompare)
      this.qlikService.getVisualization("LIST01b", this.qlikConfig['group-ref-list-inst']).then(model => {
        this.refGroupCountModelInst = model;
        this.refGroupCountInst = model.layout.title;

        this.refGroupCountInstListener = () => {
          _this.refGroupCountInst = model.layout.title;
        };

        model.Validated.bind(this.refGroupCountInstListener);
      });

    if (this.showCompare)
      this.qlikService.getVisualization("LIST02a", this.qlikConfig['group-comp-list-estab']).then(model => {
        this.compGroupCountModelEstab = model;
        this.compGroupCountEstab = model.layout.title;

        this.compGroupCountEstabListener = () => {
          _this.compGroupCountEstab = model.layout.title;
        };

        model.Validated.bind(this.compGroupCountEstabListener);
      });

    if (this.showCompare)
      this.qlikService.getVisualization("LIST02b", this.qlikConfig['group-comp-list-inst']).then(model => {
        this.compGroupCountModelInst = model;
        this.compGroupCountInst = model.layout.title;

        this.compGroupCountInstListener = () => {
          _this.compGroupCountInst = model.layout.title;
        };

        model.Validated.bind(this.compGroupCountInstListener);
      });


    //refType handling
    this.refType = this.utilService.getTypeByValue(this.stateService.getState('refType'), this.qlikConfig.refTypes);
    this.onRefTypeChanged({ refType: this.refType });

    //costType handling
    this.costType = this.utilService.getTypeByValue(this.stateService.getState('costType'), this.qlikConfig.costTypes);
    this.onCostTypeChanged({ costType: this.costType });

    //Dimension handling
    this.dimensionFieldListener = () => {
      this.dimensionField.rows.forEach(row => {
        this.qlikConfig.dimensions.forEach(dimension => {
          if (row.qText === dimension.value && row.qState === 'S') {
            this.dimension = dimension;
            this.stateService.setState('dimension', this.dimension);
          }
        });
      });
    };
    this.dimensionField = this.qlikService.field([this.qlikConfig["dimension-field"]], this.dimensionFieldListener);

    //Measure handling
    this.measureFieldListener = () => {
      this.measureField.rows.forEach(row => {
        this.measures.forEach(measure => {
          if (row.qText === measure.value && row.qState === 'S') {
            this.measure = measure;
            this.stateService.setState('measure', this.measure);
          }
        });
      });

      this.onMeasureChanged({ measure: this.measure });
    };
    this.measureField = this.qlikService.field([this.qlikConfig["measure-field"]], this.measureFieldListener);

    //Stack handling
    this.stackFieldListener = () => {
      this.qlikConfig.stacks.forEach(stack => {
        let selected = false;
        let hits = this.stackField.rows.filter(row => row.qText === stack.value || (stack.alt && stack.alt.indexOf(row.qText) > -1));

        hits.forEach(hit => {
          if (hit.qState === 'S') {
            selected = true;
          }
        });

        if (selected) {
          this.stack = stack;
          this.stateService.setState('stack', this.stack);
        }
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
