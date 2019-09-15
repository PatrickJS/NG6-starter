class ChartLegendController {
  constructor(qlikService) {
    'ngInject';

    this.name = 'chartLegend';
    this.qlikService = qlikService;
  }

  $onChanges(changeObj) {
    console.log(changeObj);

    if (changeObj.qlikField && changeObj.qlikField.currentValue && changeObj.qlikField.currentValue !== changeObj.qlikField.previousValue) {
      //When legend field has been changed, switch the field listener to that field
      console.log("field changeds");

      this.fieldListener = () => {

        this.legends = this.field.rows.map(legend => ({
          value: legend.qText,
          active: true
        }));

        this.field.OnData.unbind(this.fieldListener);
      };

      this.field = this.qlikService.field([this.qlikField], this.fieldListener);
    }
  }

  toggleLegend(legend) {
    legend.active = !legend.active;

    this.qlikService.select(this.qlikField, this.legends.filter(legend => legend.active).map(legend => legend.value));
  }

  getColor(legend) {
    let hits = this.legendList.filter(l => l.value === legend.value);

    if (hits.length > 0) {
      return hits[0].color;
    } else {
      return '#dddddd';
    }
  }
}

export default ChartLegendController;
