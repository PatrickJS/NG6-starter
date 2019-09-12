class SideBarController {
  constructor(loadService, qlikService) {
    'ngInject';
    this.name = 'sideBar';

    this.qlikService = qlikService;
    this.filters = [];

    loadService.loadConfig('filters').then(data => {
      this.config = data;

      this.filters = this.config.filters["Courte durée"];
      // this.streamFieldListener = () => {
      //   this.streamField.rows.forEach(row => {
      //     if (row.qState === 'S') {
      //       this.filters = this.filters.concat(this.config.filters[row.qText]);
      //     }
      //   });

      //   console.log(this.filters)
      // }
      // this.streamField = this.qlikService.field([this.config["stream-field"]], this.streamFieldListener);
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
