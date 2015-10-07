class CreateGroupController {
  constructor($state, User) {
  	var vm = this;
  	vm.user = {};

  	vm.goToEmailConfirmation = function(){
  		$state.go('create.emailconfirmation');
  	}

  	vm.goToPickName = function(email){
      console.log('here',vm.user.email, vm.user.emailconfirmation, vm.user.email !== vm.user.emailconfirmation);
  		if (vm.user.email === vm.user.emailconfirmation){
  			$state.go('create.name');
  		}else{
        vm.confirmEmail = true;
  			//animation to correct email;
  		}
  		
  	}



    vm.signUp = function(){
    	console.log('I am signing up')
		// User.addToProfile(vm.user);
		// vm.profile = {};
		// $state.go('profile',{"profileId":$stateParams.profileId});
	}
  }
}

export default CreateGroupController;
