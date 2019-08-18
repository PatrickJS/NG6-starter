class menuTabRightController {
  constructor() {
    this.name = 'menuTabRight';

    let _this = this;

    _this.$onInit = () => {
      $('select').niceSelect();
    }

    _this.$onChanges = changeObj => {
      if (changeObj.stream && changeObj.stream.currentValue) {
        _this.tiles = getTiles(_this.stream, _this.tileList);
        if (_this.tiles && _this.tiles.length > 0 && _this.tiles.indexOf(_this.currentTile) < 0)
          _this.currentTile = _this.tiles[0];
      }

      if (changeObj.filterList && changeObj.filterList.currentValue) {
        _this.currentFilter = changeObj.filterList.currentValue[0];
      }
    };

    _this.selectTile = tile => {
      _this.currentTile = tile;
    }

    _this.selectFilter = filter => {
      _this.currentFilter = filter;
    }

    _this.selectDimension = dimension => {
      _this.currentDimension = dimension
    }
  }
}

function getTiles(stream, tileList) {
  return tileList.filter(tile => stream.tiles.indexOf(tile.id) > -1);
}

export default menuTabRightController;
