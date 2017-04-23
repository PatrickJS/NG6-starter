const inquirer = require('inquirer-directory'),
  basePath = './generators/';
  generators = [{
    "name": "component",
    "generator": require(basePath + "component.config")
  }, {
    "name": "directive",
    "generator": require(basePath + "directive.config")
  }, {
    "name": "filter",
    "generator": require(basePath + "filter.config")
  }, {
    "name": "factory",
    "generator": require(basePath + "factory.config")
  }, {
    "name": "service",
    "generator": require(basePath + "service.config")
  }];

module.exports = (plop) => {

  plop.addPrompt('directory', inquirer);

  // Set Generators from json file
  generators.forEach((gen) => {
    plop.setGenerator(gen.name, gen.generator(plop));
  });
};
