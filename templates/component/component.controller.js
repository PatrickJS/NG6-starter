class {{ properCase name }}Controller {
  constructor() {
    'ngInject';

    this.name = '{{ camelCase name }}';
  }
    /* Component's Lifecycle /*
  /**
   * Called on each controller after all the controllers on an element have been
   *  constructed and had their bindings initialized.
   */
  $onInit () {};
  /**
   * Called whenever one-way bindings are updated.
   * @param  {[Object]} changesObj Has of bound properties that have changed.
   */
  $onChanges (changes) {};
  /**
   * Called on each turn of the digest cycle.
   */
  $doCheck () {};
  /**
   * Called on a controller when its containing scope is destroyed.
   * Use this hook for releasing external resources, watches and event handlers.
   */
  $onDestroy () {};
  /**
   * Called after this controller's element and its children have been linked.
   * Use this to set up DOM event handlers and do direct DOM manipulation.
   */
  $postLink () {};
}

export default {{ properCase name }}Controller;
