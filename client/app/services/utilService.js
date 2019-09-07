export default class utilService {
  getMeasuresByStreams(streams, measureList) {
    let measures = [];

    streams.forEach(stream => {
      let hits = measureList.filter(measure => stream.measures.indexOf(measure.id) > -1);

      hits.forEach(hit => {
        if (measures.indexOf(hit) < 0) {
          measures.push(hit);
        }
      });
    });

    return measures;
  }
}
