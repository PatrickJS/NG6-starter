export default class userService {
  constructor() {
      this.user = { name: 'John Doe' };
  }

  getUser() {
    return this.user;
  }

  getName() {
    return this.user.name;
  }

  isSignedIn() {
    return this.user.isSignedIn;
  }
};
