import EtlonnageModule from './etlonnage';
import EtlonnageController from './etlonnage.controller';
import EtlonnageComponent from './etlonnage.component';
import EtlonnageTemplate from './etlonnage.html';

describe('Etlonnage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EtlonnageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EtlonnageController();
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
      expect(EtlonnageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EtlonnageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EtlonnageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EtlonnageController);
    });
  });
});
