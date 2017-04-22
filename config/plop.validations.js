module.exports = function required(name) {

  return (value) => {
    if (!value) {
      return `${name} is required`;
    }

    return true;
  }
}
