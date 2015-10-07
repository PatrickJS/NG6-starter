import template from './email.html';
import controller from '../../createGroup.controller';
import '../../createGroup.styl';

let Email = function(){
	return {
		template,
		restrict: 'E',
		controllerAs: 'vm',
	};
};

export default Email;