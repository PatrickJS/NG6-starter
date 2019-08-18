import NiceSelectModule from './niceSelect';
import NiceSelectController from './niceSelect.controller';
import NiceSelectComponent from './niceSelect.component';
import NiceSelectTemplate from './niceSelect.html';

describe('NiceSelect', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NiceSelectModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NiceSelectController();
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
      expect(NiceSelectTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NiceSelectComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NiceSelectTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NiceSelectController);
    });
  });
});
