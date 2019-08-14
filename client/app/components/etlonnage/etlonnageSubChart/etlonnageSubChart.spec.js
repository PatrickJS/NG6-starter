import EtlonnageSubChartModule from './etlonnageSubChart';
import EtlonnageSubChartController from './etlonnageSubChart.controller';
import EtlonnageSubChartComponent from './etlonnageSubChart.component';
import EtlonnageSubChartTemplate from './etlonnageSubChart.html';

describe('EtlonnageSubChart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EtlonnageSubChartModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EtlonnageSubChartController();
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
      expect(EtlonnageSubChartTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EtlonnageSubChartComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EtlonnageSubChartTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EtlonnageSubChartController);
    });
  });
});
