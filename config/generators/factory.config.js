let required = require('../plop.validations');

module.exports = (plop) => {
  return {
    description: 'Create a new factory',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is name of new factory?',
        validate: required('name'),
    },
      {
        type: 'confirm',
        name: 'needPath',
        message: 'Do you want to specify the path manually (otherwise component will be placed in \\factories)?',
        default: false,
    },
      {
        type: 'directory',
        name: 'path',
        message: 'Where to put new factory?',
        basePath: './client/app',
        default: '',
        when: (answers) => answers.needPath,
    }
  ],
    actions: () => {
      plop.addPartial('path', '{{#if path}}{{ path }}/{{else}}factories/{{/if}}{{ dashCase name }}');
      plop.addPartial('fullPath', './client/app/{{> path}}');

      return [
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.js',
          templateFile: './templates/injectables/factory/factory.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.factory.js',
          templateFile: './templates/injectables/factory/factory.factory.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.spec.js',
          templateFile: './templates/injectables/factory/factory.spec.js',
          abortOnFail: true,
      },
    ]
    }
  };
}
