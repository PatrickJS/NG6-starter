import SideBarModule from './sideBar';
import SideBarController from './sideBar.controller';
import SideBarComponent from './sideBar.component';
import SideBarTemplate from './sideBar.html';

describe('SideBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SideBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SideBarController();
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
      expect(SideBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SideBarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SideBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SideBarController);
    });
  });
});
