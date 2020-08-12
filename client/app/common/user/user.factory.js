export const UserFactory = function () {
  const user = {};

  const getUser = () => {
    return user;
  };

  const isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, isSignedIn };
};
