class SideBarController {
  constructor(loadService, qlikService, stateService) {
    'ngInject';
    this.name = 'sideBar';

    this.qlikService = qlikService;
    this.stateService = stateService;
    this.filters = [];

    this.ageGroup = 1;

    loadService.loadConfig('filters').then(data => {
      this.config = data;

      this.filters = this.config.filters["Courte durée"];
      this.subgroups = this.config.subgroups;
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

  onSubGroupChange(subgroup, value) {
    //console.log(subgroup, value);

    this.qlikService.setVariable(subgroup.variable, value / 1);
    this.qlikService.select('%EtalonnageStackDesc', subgroup.options.filter(option => option.value === value / 1).map(option => option.title));

    this.stateService.setState(subgroup.state, subgroup.options.filter(option => option.value === value / 1)[0]);
  }
}

export default SideBarController;
