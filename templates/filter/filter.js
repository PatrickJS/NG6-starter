export default (/*injection*/) => {
  // 'ngInject';
  return (input /*, param*/) => {
    return input.toUpperCase();
  };
};
