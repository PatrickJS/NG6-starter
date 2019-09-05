class StreamBarController {
  /**
 * @param {QlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;

    _this.$onInit = () => {
      // _this.stream = _this.streams[0];
      // _this.onStreamChanged({ stream: _this.stream });

      let field = qlikService.field([_this.qlikField], () => {
        let streams = [..._this.streams];

        field.rows.map((row) => {
          streams.forEach(stream => {
            if (stream.value === row.qText) {
              stream.selected = row.qState === 'S';
            }
          })
        });

        _this.streams = streams;

        _this.onStreamChanged({ streams: streams.filter(stream => stream.selected) });
      });

    };

    _this.selectStream = stream => {
      //_this.stream = stream;

      let selected = _this.streams.filter(s => s.selected);

      //When there's only one option left, don't de-select the last option
      if (selected.length === 1 && selected[0].title === stream.title) {
        return;
      }
      qlikService.select(_this.qlikField, [stream.title], null, true);
      // .then(() =>
    };

  }
}

export default StreamBarController;
