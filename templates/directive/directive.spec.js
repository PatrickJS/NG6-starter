import angular from 'angular';
import {{ dashCase name }} from './{{ dashCase name }}';

describe('directive: {{ dashCase name }}', () => {
  let $compile, $timeout, $scope,
    el, htmlStr;

  // Modules import
  beforeEach(window.module({{ dashCase name }}));
  beforeEach(inject(($injector) => {
    $compile = $injector.get('$compile');
    $timeout = $injector.get('$timeout');
    $scope = $injector.get('$rootScope').$new();
    htmlStr = `<input id="testInput" type="text" test/>`;
    // Make Angular resolve the string
    el = angular.element(htmlStr);

    // Trigger digest cycle in order to see changes if needed
    $scope.$digest();
    // Compile the Element into a new scope
    $compile(el)($scope)


  }));

  it('input text should have focus [REMOVE]' , () => {
    let spy = sinon.spy(el[0], 'focus');
    expect(spy.focus).to.have.been.calledOnce;
  });
});

