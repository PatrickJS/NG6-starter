import ItemModule from './item';
import ItemService from './item.service';

describe('Module app.services.item', () => {

  // Load involved Modules
  beforeEach(window.module(ItemModule));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    // [CAVEAT] If you have several services in one module you should
    // create a separate spec file for the module and for each module and service
  });

  describe('ItemService', () => {
    let $httpBackend, getService, mockHttp;

    beforeEach(inject(($injector) => {
      let injections = [ $injector.get('$http') /*[, otherDependency]*/];

      $httpBackend = $injector.get('$httpBackend');
      getService = () => {
        // You can use injection to obtain the service but you really should
        // test the service alone as a function and provide the injections yourself
        // return $injector.get('ItemService');
        return new ItemService(...injections);
      },
      mockHttp = (url, response) => {
        $httpBackend.whenGET(url)
          .respond(() => {
            return response;
          });
      };
    }));

    it('has a name property [REMOVE]', () => { // erase if removing this.items from the service
      let service = getService();
      expect(service).to.have.property('name');
    });

    describe('HTTP requests', () => {
      let itemsUrl = /services\/items/;

      // Verify no outstanding expectation or request
      afterEach(() => {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
      });

      describe('When response is successful', () => {
        beforeEach(() => {
          let data = [{name: 'Item1'}, {name: 'Item2'}];
          mockHttp(itemsUrl, [200, data, {}]);
        });

        it('Should return items [REMOVE]', (done) => { // erase if removing this.items from the service
          let service = getService();

          service.getItems().then((response) => {
            expect(response.data).to.have.length(2);
            done();
          });

          $httpBackend.flush();
        });
      });

      describe('When request returns error', () => {
        beforeEach(() => {
          mockHttp(itemsUrl, [500]);
        });

        it('should return items [REMOVE]', (done) => { // erase if removing this.items from the service
          let service = getService();

          service.getItems()
          .then((response) => {}, (response) => {
              expect(response.data).to.be.undefined;
              done();
            });

          $httpBackend.flush();
        });
      });
    });

  });
});
0
