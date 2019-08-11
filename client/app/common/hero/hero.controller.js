class HeroController {

  constructor(qlik) {
    'ngInject';

    var _this = this;
    _this.name = 'hero';
    
    qlik.getGlobal(config).getAppList(function(list){
      console.log(list);
      _this.apps = list;
    });
  }
}

export default HeroController;
