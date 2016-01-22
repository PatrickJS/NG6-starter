export default class aboutService {
  constructor(userService) {
    'ngInject';
    this.userService = userService;
  }

  getName() {
    return `About: ${this.userService.getName()}`;
  }
}
