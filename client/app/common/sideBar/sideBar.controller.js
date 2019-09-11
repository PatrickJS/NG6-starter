class SideBarController {
  constructor(loadService, qlikService) {
    'ngInject';
    this.name = 'sideBar';

    this.qlikService = qlikService;
    loadService.loadConfig('filters').then(data => {
      this.config = data;

      this.filters = this.config["Corte durée"];
    });
  }


  toggle(filter) {
    filter.active = !filter.active;

    if (filter.active === true) {

      filter.obj.map(o => {
        this.qlikService.getVisualization(o, o);
      });

    }
  }
}

export default SideBarController;
