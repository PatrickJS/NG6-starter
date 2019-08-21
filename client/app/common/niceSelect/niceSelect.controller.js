class NiceSelectController {
  constructor($element, $timeout) {
    'ngInject';

    let _this = this;
    _this.name = "niceSelect";

    _this.$onInit = () => {
      _this.selectedOption = _this.optionList[0];
      $element.children('select').niceSelect();
    }

    _this.select = option => {
      _this.onSelectChanged({ selected: option });
    }
  }
}

export default NiceSelectController;
