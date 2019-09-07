class NavbarController {
  constructor($http, $location, loadService) {
    'ngInject';

    let _this = this;

    _this.name = 'navbar';
    _this.route = $location.path();

    loadService.loadConfig('navigation').then(data => _this.config = data);

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('.wrapper').toggleClass('active');
    });

  }
}

export default NavbarController;
