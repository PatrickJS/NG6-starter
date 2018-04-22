import DisplayModule from './display';
import DisplayController from './display.controller';
import DisplayComponent from './display.component';
import DisplayTemplate from './display.html';

describe('Display', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DisplayModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DisplayController();
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
      expect(DisplayTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = DisplayComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(DisplayTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(DisplayController);
    });
  });
});
