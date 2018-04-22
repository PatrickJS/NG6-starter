class CalculatorKeysController {
  
  constructor(calculator) {
    "ngInject";
    this.calculator = calculator;
  }
  
  onDigitClicked(digit) {
    this.calculator.addDigit(digit);
  }

  onChangeSignClicked() {
    this.calculator.changeOperandSign();
  }

  onDecimalClicked() {
    this.calculator.changeToDecimalOperand();
  }

  onOperatorClicked(operatorName) {
    this.calculator.selectOperator(ARITHMETIC_OPERATORS[operatorName]);
  }

  onClearClicked() {
    this.calculator.clear();
  }

  onGetResultClicked() {
    this.calculator.getResult();
  }
}

export default CalculatorKeysController;
