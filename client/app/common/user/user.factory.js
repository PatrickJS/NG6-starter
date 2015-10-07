let UserFactory = function () {
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn; 
  };

  return { getUser, isSignedIn };
};

export default UserFactory;
