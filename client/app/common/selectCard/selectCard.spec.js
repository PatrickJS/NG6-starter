import SelectCardModule from './selectCard';
import SelectCardController from './selectCard.controller';
import SelectCardComponent from './selectCard.component';
import SelectCardTemplate from './selectCard.html';

describe('SelectCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SelectCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SelectCardController();
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
      expect(SelectCardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SelectCardComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SelectCardTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SelectCardController);
    });
  });
});
