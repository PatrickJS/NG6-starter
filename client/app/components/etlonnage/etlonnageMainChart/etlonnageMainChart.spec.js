import EtlonnageMainChartModule from './etlonnageMainChart';
import EtlonnageMainChartController from './etlonnageMainChart.controller';
import EtlonnageMainChartComponent from './etlonnageMainChart.component';
import EtlonnageMainChartTemplate from './etlonnageMainChart.html';

describe('EtlonnageMainChart', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EtlonnageMainChartModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EtlonnageMainChartController();
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
      expect(EtlonnageMainChartTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EtlonnageMainChartComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EtlonnageMainChartTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EtlonnageMainChartController);
    });
  });
});
