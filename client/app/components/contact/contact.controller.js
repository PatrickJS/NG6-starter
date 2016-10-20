class ContactController {
  constructor( $state) {
    this.name = "Contact Us"
    this.post = {
      text: '',
      title: ''
    };

    this.$state = $state;

    newrelic.setCustomAttribute ("ControllerName", "HOME");
  }

  // use default params here
  createPost(post) {
    console.log("Post submitted", post);
    this.$state.go('about');
  }
}


ContactController.$inject = [ '$state'];

export default ContactController;
