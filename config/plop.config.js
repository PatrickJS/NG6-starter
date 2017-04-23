const inquirer = require('inquirer-directory'),
  generators = [{
    "name": "component",
    "generator": require("./generators/component.config")
  }, {
    "name": "filter",
    "generator": require("./generators/filter.config")
  }, {
    "name": "factory",
    "generator": require("./generators/factory.config")
  }, {
    "name": "service",
    "generator": require("./generators/service.config")
  }];

module.exports = (plop) => {

  plop.addPrompt('directory', inquirer);

  // Set Generators from json file
  generators.forEach((gen) => {
    plop.setGenerator(gen.name, gen.generator(plop));
  });
};
