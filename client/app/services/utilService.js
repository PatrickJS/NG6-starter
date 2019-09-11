export default class utilService {
  getMeasuresByStreams(streams, measureList) {
    let measures = [];

    if (streams && measureList) {
      streams.forEach(stream => {
        let hits = measureList.filter(measure => stream.measures.indexOf(measure.id) > -1);

        hits.forEach(hit => {
          if (measures.indexOf(hit) < 0) {
            measures.push(hit);
          }
        });
      });
    }
    return measures;
  }

  getStacksByStreams(streams, stackList) {
    let stacks = [];

    if (streams && stackList) {
      streams.forEach(stream => {
        let hits = stackList.filter(stack => stream.stacks.indexOf(stack.id) > -1);

        hits.forEach(hit => {
          if (stacks.indexOf(hit) < 0) {
            stacks.push(hit);
          }
        });
      });
    }
    return stacks;
  }
}
