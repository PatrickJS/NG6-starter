import template from './url.html';
import controller from '../../createGroup.controller';
import '../../createGroup.styl';

let Url = function(){
	return {
		template,
		restrict: 'E',
		controllerAs: 'vm',
	};
};

export default Url;