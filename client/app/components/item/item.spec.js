import ItemModule from './item'
import ItemController from './item.controller';
import ItemServiceModule from '../../services/item/item';

// [NOTE] This Spec example is only for show how to stub a service which is
// using $http requests

describe('Component: item', () => {
  let $q, $scope, $timeout,
    makeController, mockedPromise, stubItemService = {};

  // Modules import
  beforeEach(() => {
    window.module(ItemModule);
    window.module(ItemServiceModule);
  });

  describe('Controller', () => {

    beforeEach(inject(($injector) => {
      let ItemService = $injector.get('ItemService');
      $q = $injector.get('$q');
      $timeout = $injector.get('$timeout');
      mockedPromise = $q.when({ data: ['Item 1', 'Item 2']});

      // You need to create an stub or spy for each method of the service which
      // is used
      stubItemService.getName= sinon.stub(ItemService, 'getName')
        .returns('MockedService');
      stubItemService.getItems= sinon.stub(ItemService, 'getItems')
        .callsFake(() => {
          return mockedPromise;
        });

      makeController = () => {
        return new ItemController(stubItemService);
      };

    }));

    // Restore sinon stubs
    // More information on how to use Stubs: http://sinonjs.org/releases/v2.1.0/stubs/
    afterEach(()=> {
      Object.getOwnPropertyNames(stubItemService)
        .forEach((key)=> {
          stubItemService[key].restore();
        });
    });


    // controller specs
    it('has a serviceName property provided by the ItemService[REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('serviceName').and.to.equals('MockedService');
      expect(stubItemService.getName).to.have.been.calledOnce;
    });

    it('has an items properties provided by a promise from the ItemService[REMOVE]', (done) => { // erase if removing this.name from the controller
       let controller = makeController();
        mockedPromise
          .finally(() => {
            expect(controller).to.have.property('items').and.to.have.length(2);
            expect(stubItemService.getItems).to.have.been.calledOnce;
            done();
          });
        $timeout.flush();
    });
  });
});
