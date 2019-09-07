import ChartLegendModule from './chartLegend';
import ChartLegendController from './chartLegend.controller';
import ChartLegendComponent from './chartLegend.component';
import ChartLegendTemplate from './chartLegend.html';

describe('ChartLegend', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChartLegendModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChartLegendController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ChartLegendTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ChartLegendComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ChartLegendTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ChartLegendController);
    });
  });
});
