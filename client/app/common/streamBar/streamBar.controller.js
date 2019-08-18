class StreamBarController {
  constructor() {
    let _this = this;

    _this.$onInit = () => {
      _this.stream = _this.streams[0];
      _this.onStreamChanged({ stream: _this.stream });
    };

    _this.selectStream = stream => {
      _this.stream = stream;
      _this.onStreamChanged({ stream });
    };

  }
}

export default StreamBarController;
