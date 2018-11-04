export default (scope, el, attrs, ctrl) => {

    el.focus();

    el.$on('$destroy', () => {
      // Unbind listeners
    });
}
