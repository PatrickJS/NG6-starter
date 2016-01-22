class AboutController {
  constructor(aboutService) {
    'ngInject';
    this.aboutService = aboutService;
    this.name = this.aboutService.getName();
  }
}

export default AboutController;
