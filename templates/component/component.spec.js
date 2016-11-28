import {{ camelCase name }} from './{{ dashCase name }}'
import {{ properCase name }}Controller from './{{ dashCase name }}.controller';
import {{ camelCase name }}Component from './{{ dashCase name }}.component';
import {{ camelCase name }}Template from './{{ dashCase name }}.html';

describe('Component: {{ camelCase name }}', () => {
  let $rootScope, makeController;

  beforeEach(window.module({{ camelCase name }}));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new {{ properCase name }}Controller();
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
    // tip: use regex to ensure correct bindings are used e.g., \{{  }}
    it('has name in template [REMOVE]', () => {
      expect({{ camelCase name }}Template).to.match(/\{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = {{ camelCase name }}Component;

      it('includes the intended template',() => {
        expect(component.template).to.equal({{ camelCase name }}Template);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal({{ properCase name }}Controller);
      });
  });
});
