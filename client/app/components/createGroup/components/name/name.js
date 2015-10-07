import template from './name.html';
import controller from '../../createGroup.controller';
import '../../createGroup.styl';

let Name = function(){
	return {
		template,
		restrict: 'E',
		controllerAs: 'vm',
	};
};

export default Name;