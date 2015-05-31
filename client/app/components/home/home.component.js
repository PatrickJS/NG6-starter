import controller from './home.controller';
import template from './home.html!text';
import './home.css!';

let homeComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default homeComponent;