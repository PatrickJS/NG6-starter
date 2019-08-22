import ComparaisonsPageModule from './comparaisonsPage';
import ComparaisonsPageController from './comparaisonsPage.controller';
import ComparaisonsPageComponent from './comparaisonsPage.component';
import ComparaisonsPageTemplate from './comparaisonsPage.html';

describe('ComparaisonsPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ComparaisonsPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ComparaisonsPageController();
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
      expect(ComparaisonsPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ComparaisonsPageComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ComparaisonsPageTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ComparaisonsPageController);
    });
  });
});
