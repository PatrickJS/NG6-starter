import WeatherModule from './weather'
import WeatherController from './weather.controller';
import WeatherComponent from './weather.component';
import WeatherTemplate from './weather.html';

describe('Weather', () => {
  let $rootScope, makeController;

  beforeEach(window.module(WeatherModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new WeatherController({getForeCast: function() {return {then: function() {}}}});
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
      expect(WeatherTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WeatherComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WeatherTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WeatherController);
      });
  });
});
