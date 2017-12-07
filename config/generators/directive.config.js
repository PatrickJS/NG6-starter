let required = require('../plop.validations');

module.exports = (plop) => {
  return {
    description: 'Create a new directive',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new directive?',
        validate: required('name'),
    },
      {
        type: 'confirm',
        name: 'needPath',
        message: 'Do you want to specify the path manually (otherwise component will be placed in \\common\\directive)',
        default: false,
    },
      {
        type: 'directory',
        name: 'path',
        message: 'Where to put new directive?',
        basePath: './client/app',
        default: '',
        when: (answers) => answers.needPath,
    }
  ],
    actions: () => {
      plop.addPartial('path', '{{#if path}}{{ path }}/{{else}}common/directives/{{/if}}{{ dashCase name }}');
      plop.addPartial('fullPath', './client/app/{{> path}}');

      return [
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.js',
          templateFile: './templates/directive/directive.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.directive.js',
          templateFile: './templates/directive/directive.directive.js',
          abortOnFail: true,
      },
        {
          type: 'add',
          path: '{{> fullPath}}/{{dashCase name}}.spec.js',
          templateFile: './templates/directive/directive.spec.js',
          abortOnFail: true,
      }
    ]
    }
  };
}
