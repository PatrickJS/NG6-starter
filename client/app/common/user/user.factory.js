let UserFactory = function () {
  const user = { name: 'John Doe' };

  function getUser() {
    return user;
  }

  function getUserName() {
    return user.name;
  }

  function isSignedIn() {
    return user.isSignedIn;
  }

  return { getUser, getUserName, isSignedIn };
};

export default UserFactory;
