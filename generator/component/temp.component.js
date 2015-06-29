import template from './<%= name %>.html!text';
import controller from './<%= name %>.controller.js';
import './<%= name %>.css';

let <%= name %>Component = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {},
		bindToController: true
	};
};

export default <%= name %>Component;