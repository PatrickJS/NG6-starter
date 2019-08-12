class AboutController {
  constructor(qlik) {
    'ngInject'
    this.name = 'about';

    var global = qlik.getGlobal(config);
    global.getAuthenticatedUser(function (reply) {
      alert('User:' + reply.qReturn);
    });
  }
}

export default AboutController;
