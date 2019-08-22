import CompareTableModule from './compareTable';
import CompareTableController from './compareTable.controller';
import CompareTableComponent from './compareTable.component';
import CompareTableTemplate from './compareTable.html';

describe('CompareTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CompareTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CompareTableController();
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
      expect(CompareTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CompareTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CompareTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CompareTableController);
    });
  });
});
