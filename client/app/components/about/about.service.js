class AboutService {
  constructor(User) {
    'ngInject';
    this.user = User;
    this.name = this.user.getUserName();
  }

  getName() {
    return `About: ${this.name}`;
  }
}

export default AboutService;