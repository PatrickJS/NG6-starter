import CalculatorKeysModule from './calculatorKeys';
import CalculatorKeysController from './calculatorKeys.controller';
import CalculatorKeysComponent from './calculatorKeys.component';
import CalculatorKeysTemplate from './calculatorKeys.html';

describe('CalculatorKeys', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CalculatorKeysModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CalculatorKeysController();
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
      expect(CalculatorKeysTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CalculatorKeysComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CalculatorKeysTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CalculatorKeysController);
    });
  });
});
