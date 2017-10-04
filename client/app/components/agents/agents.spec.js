import AgentsModule from './agents'

describe('Agents', () => {
  let $rootScope, $state, $location, $componentController, $compile, agentsService, http;

  beforeEach(window.module(AgentsModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
    agentsService = $injector.get('agentsService');
    http = $injector.get('$httpBackend');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('Agents component should be visible when navigates to /agents', () => {
      $location.url('/agents');
      $rootScope.$digest();
      expect($state.current.component).to.eq('agents');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('agents', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });

    it('has a searchName property', () => {
      expect(controller).to.have.property('searchName');
    });

    it('has a agents property', () => {
      expect(controller).to.have.property('agents');
    });

    it('has a message property', () => {
      expect(controller).to.have.property('message');
    });

    it('has a search property', () => {
      expect(controller).to.have.property('search');
    });

    it('has no agents before search', () => {
      expect(controller.agents.length).to.equal(0);
    });

    it('has an empty serach string before search', () => {
      expect(controller.searchName).to.equal('');
    });

  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<agents></agents>')(scope);
      scope.$apply();
    });

    it('has a search input', () => {
      expect(template.find('input').length).to.equal(1);
    });

    it('has a search button', () => {
      expect(template.find('button').length).to.equal(1);
    });

  });

  describe('Service', () => {

    it('has a findAgents property', () => {
      expect(agentsService).to.have.property('findAgents');
    });

    it('calls the REST api on findAgents', () => {
      agentsService.findAgents();
      http.expectGET('https://api.ratemyagent.com.au/autosearch/agents?searchTerm=');
    });

  });

});
