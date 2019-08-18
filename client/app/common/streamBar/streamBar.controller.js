class StreamBarController {
  constructor() {
    let _this = this;

    _this.$onChanges = changeObj => {
      if (changeObj.streams) {
        if (_this.streams && _this.streams.length > 0)
          _this.selectedStream = _this.streams[0];
      }

    };

    _this.selectStream = stream => {
      _this.selectedStream = stream;
    };

  }
}

export default StreamBarController;
