import StreamBarModule from './streamBar';
import StreamBarController from './streamBar.controller';
import StreamBarComponent from './streamBar.component';
import StreamBarTemplate from './streamBar.html';

describe('StreamBar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StreamBarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StreamBarController();
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
      expect(StreamBarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = StreamBarComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(StreamBarTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(StreamBarController);
    });
  });
});
