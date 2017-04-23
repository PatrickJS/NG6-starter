let required = require('../plop.validations');

module.exports = (plop) => {
  return {
    description: 'Create a new filter',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new filter?',
        validate: required('name'),
    },
      {
        type: 'confirm',
        name: 'needPath',
        message: 'Should I place new filter in filters directory, or it should be placed somewhere else?',
        default: false,
    },
      {
        type: 'directory',
        name: 'path',
        message: 'Where to put new filter?',
        basePath: './client/app',
        default: '',
        when: (answers) => answers.needPath,
    }
  ],
    actions: () => {
      plop.addPartial('path', '{{#if path}}{{ path }}/{{else}}components/{{/if}}{{ dashCase name }}');
      plop.addPartial('fullPath', './client/app/common/filters/{{> path}}');

      return [
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.js',
          templateFile: './templates/filter/filter.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.spec.js',
          templateFile: './templates/filter/filter.spec.js',
          abortOnFail: true,
      }
    ]
    }
  };
}
