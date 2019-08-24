class NavbarController {
  constructor($http, $location) {
    'ngInject';

    let _this = this;

    _this.name = 'navbar';
    _this.route = $location.path();

    $http.get("config/navigation.json").then(reply => {
      _this.config = reply.data;;
    });

    //_this.selectNav = nav => _this.currentNav = nav;
  }
}

export default NavbarController;
