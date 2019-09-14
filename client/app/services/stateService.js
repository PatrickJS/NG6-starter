export default class stateService {
  constructor() {
    'ngInject'

    this.state = {
      global: {
        refType: 1,
        costType: 1,
        viewMode: 'chart',
        tableMode: '#',
        stackMode: '#',
        ageMode: {
          "title": "Groupes d’âge normaux",
          "value": 1
        }
      }
    };
  }

  setState(prop, value, scope) {
    let s = scope ? scope : 'global';

    if (this.state[s]) {
      this.state[s][prop] = value;
    }

    return value;
  }

  getState(prop, scope) {
    let s = scope ? scope : 'global';

    if (this.state[s]) {
      return this.state[s][prop];
    }

    return null;
  }
}
