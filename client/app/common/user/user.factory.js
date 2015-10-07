let UserFactory = function($firebaseObject, $firebaseAuth, $state){

	var ref = new Firebase('https://jsclass.firebaseio.com/');
	var authObj = $firebaseAuth(ref);

	var addUser = function(user){
		authObj.$createUser({
			  email: user.email,
			  password: user.password
			}).then(function(userData) {
			  console.log("User " + userData.uid + " created successfully!");
			  return authObj.$authWithPassword({
			    email: user.email,
			    password: user.password
			  });
			 
			}).then(function(authData) {
			  console.log("Logged in as ici:", authData.uid);
			  var userRef = $firebaseObject(ref.child('users').child(authData.uid));
			  userRef.email = authData.password.email;
			  userRef.$save().then(function(ref) {
			  
			  // $state.go('profilesetup.basic',{"profileId":authData.uid});
			  
			  }, function(error) { console.log("Error:", error);});
			
			}).catch(function(error) {
			  console.error("Error: ", error);
			});
    }

 //    var createProfile = function(user){
 //  		var userRef = $firebaseArray(ref.child('users').child);
 //  		userRef.$add(user).then(function(ref) {
 //  			var id = ref.key();
 //  			console.log(id);
 //  		});
	// };

    var login = function(email, password){
    	authObj.$authWithPassword({
			  email: email,
			  password:password
			}).then(function(authData) {
			  console.log("Logged in as:", authData.uid);
			}).catch(function(error) {
			  console.error("Authentication failed:", error);
			});
    }

    var isLogin = function(){
    	var authData = ref.getAuth();
			if (authData) {
				console.log('ici',ref.key());
			  console.log("User " + authData.uid + " is logged in with " + authData.provider);
			} else {
			  console.log("User is logged out");
			}
    }

    var addToProfile = function(uid, obj){
    	var userRef = $firebaseObject(ref.child('users').child(uid));
    	for(var key in obj){
    		userRef[key] = obj[key];
    	}
	    userRef.$save().then(function(ref) {}, function(error) { console.log("Error:", error);});
    }

    var getProfile = function(uid){
    	return $firebaseObject(ref.child('users').child(uid));
    }


	return {addUser, login, isLogin, addToProfile,getProfile};
};



export default UserFactory; 