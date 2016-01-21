class AboutController {
  constructor(AboutService) {
    'ngInject';
    this.aboutService = AboutService;
    this.name = this.aboutService.getName();
  }
}

export default AboutController;
