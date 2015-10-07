let GroupsFactory = function($firebaseArray, $firebaseAuth, $state){

	var ref = new Firebase('https://jsclass.firebaseio.com/');
	var authObj = $firebaseAuth(ref);

	var getGroups = function(){
		[];
	}

	


	return {getGroups};
};



export default UserFactory; 