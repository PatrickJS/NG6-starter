export default (/* injections*/) => {
  'ngInject';

  class {{ properCase name }}Service {

    constructor(/* injections*/) {
      'ngInject';

      this.name = '{{ properCase name }}Service';
    }
    getName () {
      return this.name;
    }
  }

  return new {{ properCase name }}Service;
};
