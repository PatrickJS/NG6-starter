import template from './app.html!text';
import './app.css!';

let appComponent = ()=>{
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E'
	};
};

export default appComponent;
