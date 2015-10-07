import template from './emailConfirmation.html';
import controller from '../../createGroup.controller';
import '../../createGroup.styl';

let emailConfirmation = function(){
	return {
		template,
		restrict: 'E',
		controllerAs: 'vm',
	};
};

export default emailConfirmation;