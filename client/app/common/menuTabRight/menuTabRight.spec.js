import menuTabRightModule from './menuTabRight';
import menuTabRightController from './menuTabRight.controller';
import menuTabRightComponent from './menuTabRight.component';
import menuTabRightTemplate from './menuTabRight.html';

describe('menuTabRight', () => {
  let $rootScope, makeController;

  beforeEach(window.module(menuTabRightModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new menuTabRightController();
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
      expect(menuTabRightTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = menuTabRightComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(menuTabRightTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(menuTabRightController);
    });
  });
});
