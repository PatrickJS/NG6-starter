const inquirer = require('inquirer-directory');
const componentGenerator = require('./generators/component.config');
const serviceGenerator = require('./generators/service.config');

module.exports = (plop) => {

  plop.addPrompt('directory', inquirer);

  plop.setGenerator('component', componentGenerator(plop));
  plop.setGenerator('service', serviceGenerator(plop));
};
