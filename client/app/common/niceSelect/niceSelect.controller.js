class NiceSelectController {
  constructor($element) {
    'ngInject';

    this.$element = $element;
    this.name = "niceSelect";
  }

  $onInit() {
    this.selectedOption = this.model;
    this.$element.children('select').niceSelect();
  }

  select(option) {
    this.onSelectChanged({ selected: option });
  }
}

export default NiceSelectController;
