import CreateGroupModule from './createGroup'
import CreateGroupController from './createGroup.controller';
import CreateGroupComponent from './createGroup.component';
import CreateGroupTemplate from './createGroup.html';

describe('CreateGroup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreateGroupModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreateGroupController();
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
      expect(CreateGroupTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CreateGroupComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CreateGroupTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CreateGroupController);
      });
  });
});
