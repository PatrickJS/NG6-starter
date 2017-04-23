const inquirer = require('inquirer-directory'),
  componentGenerator = require('./generators/component.config'),
  filterGenerator = require('./generators/filter.config'),
  serviceGenerator = require('./generators/service.config');

module.exports = (plop) => {

  plop.addPrompt('directory', inquirer);

  plop.setGenerator('components', componentGenerator(plop));
  plop.setGenerator('filter', filterGenerator(plop));
  plop.setGenerator('service', serviceGenerator(plop));
};
