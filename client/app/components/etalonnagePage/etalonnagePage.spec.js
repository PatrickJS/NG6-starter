import EtalonnageModule from './etalonnagePage';
import EtalonnageController from './etalonnagePage.controller';
import EtalonnageComponent from './etalonnage.component';
import EtalonnageTemplate from './etaonnage.html';

describe('Etalonnage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EtalonnageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EtalonnageController();
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
      expect(EtalonnageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EtalonnageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EtalonnageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EtalonnageController);
    });
  });
});
