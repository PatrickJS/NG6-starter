import { $IncludedByStateFilter } from "angular-ui-router/lib/stateFilters";
import { map } from "@uirouter/core";

class CompareTableController {
  constructor() {
    let _this = this;
    _this.name = 'compareTable';
    _this.data = [];

    _this.$onChanges = changeObj => {
      console.log(changeObj)

      if (changeObj.refData && changeObj.refData.currentValue) {
        applyChange(changeObj.refData.currentValue, 'ref', _this);
      }
      if (changeObj.compData && changeObj.compData.currentValue) {
        applyChange(changeObj.compData.currentValue, 'comp', _this);
      }
      if (changeObj.ecartData && changeObj.ecartData.currentValue) {
        applyChange(changeObj.ecartData.currentValue, 'ecart', _this);
      }
    }

    _this.checkHide = row => {
      return (row.title === 'Coût moyen' && _this.refType && _this.refType.value === 2) || (row.title === 'Coût meden' && _this.refType && _this.refType.value === 1);
    };

  }
}

function applyChange(data, type, scope) {
  data.map(d => {
    let hits = scope.data.filter(row => row.title === d.title);

    if (hits.length > 0) {
      hits[0][type] = d.value;
    } else {
      scope.data.push({
        title: d.title,
        [type]: d.value
      });
    }
  });
}

export default CompareTableController;
