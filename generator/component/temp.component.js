import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

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