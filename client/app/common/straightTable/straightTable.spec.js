import StraightTableModule from './straightTable';
import StraightTableController from './straightTable.controller';
import StraightTableComponent from './straightTable.component';
import StraightTableTemplate from './straightTable.html';

describe('StraightTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StraightTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StraightTableController();
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
      expect(StraightTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = StraightTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(StraightTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(StraightTableController);
    });
  });
});
