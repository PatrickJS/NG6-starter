class SelectCardController {
  constructor() {
    this.name = 'selectCard';
  }

  getTitle() {
    if (this.data && (this.data.title === 'Coût moyen' || this.data.title === 'Coût médiane')) {
      return this.refType.value === 1 ? 'Coût moyen' : 'Coût médiane';
    } else {
      return this.data.title;
    }
  }
}

export default SelectCardController;
