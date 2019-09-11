class StreamBarController {
  /**
 * @param {QlikService} qlikService
 */
  constructor(qlikService) {
    'ngInject';

    let _this = this;
    let streamField;
    let streamFieldListener = () => {
      let streams = [..._this.streams];

      streamField.rows.map((row) => {
        streams.forEach(stream => {
          if (stream.value === row.qText) {
            stream.selected = row.qState === 'S';
          }
        })
      });

      _this.streams = streams;

      _this.onStreamChanged({ streams: streams.filter(stream => stream.selected) });
    };

    _this.$onInit = () => {
      streamField = qlikService.field([_this.qlikField], streamFieldListener);
    };

    _this.selectStream = stream => {
      //_this.stream = stream;

      let selected = _this.streams.filter(s => s.selected);

      //When there's only one option left, don't de-select the last option
      if (selected.length === 1 && selected[0].title === stream.title) {
        return;
      }

      streamField.selectValues([stream.title], true);
      qlikService.select(_this.qlikField, [stream.value], "GrRef", true);
      qlikService.select(_this.qlikField, [stream.value], "GrComp", true);
    };

    _this.$onDestroy = () => {
      streamField.OnData.unbind(streamFieldListener);
    };
  }
}

export default StreamBarController;
