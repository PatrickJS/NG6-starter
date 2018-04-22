export default class Calculator {
    constructor() {
        this.operand1 = new IntegerOperand();
        this.operand2 = new IntegerOperand();
        this.operator = null;
        this.currentState = CALCULATION_STATE.START;
        this.currentOperand = null;
        this.lastResult = new Operand();
    }
    
    addDigit(digit) {
        this.changeToCalculationOperandState();
        this.currentOperand.addDigit(digit);
    }

    changeOperandSign() {
        this.changeToCalculationOperandState();
        this.currentOperand.switchSign();
    }

    changeToDecimalOperand() {
        this.changeToCalculationOperandState();

        if (!(this.currentOperand instanceof DecimalOperand)) {
            this.currentOperand = new DecimalOperand(this.currentOperand.value,
                                                     this.currentOperand.sign);
            this.updateOperand();
        }
    }

    updateOperand() {
        if (this.currentState == CALCULATION_STATE.INSERT_OPERAND_1) {
            this.operand1 = this.currentOperand;
        }
        else {
            this.operand2 = this.currentOperand;
        }
    }

    selectOperator(operator) {
        this.performContinuousCalculation();
        this.currentState = CALCULATION_STATE.INSERT_OPERATOR;
        this.operator = operator;
    }

    getResult() {
        let result = this.getResultByCalculatorState();
        this.clear();
        this.lastResult = result;
    }

    getResultByCalculatorState() {
        let result;

        if ((this.currentState == CALCULATION_STATE.INSERT_OPERAND_1) || 
            (this.currentState == CALCULATION_STATE.INSERT_OPERATOR)) {
            result = new Operand(this.operand1.value);
        }
        else if (this.currentState == CALCULATION_STATE.INSERT_OPERAND_2) {
            result = this.performCalculation();
        }
        else {
            result = new Operand();
        }

        return result;
    }

    performCalculation() {
        return this.operator.performCalculation(this.operand1, this.operand2);;
    }

    clear() {
        this.operand1 = new IntegerOperand();
        this.operand2 = new IntegerOperand();
        this.operator = null;
        this.currentState = CALCULATION_STATE.START;
        this.currentOperand = null;
        this.lastResult = new Operand();
    }

    changeToCalculationOperandState() {
        if (this.currentState == CALCULATION_STATE.START) {
            this.currentState = CALCULATION_STATE.INSERT_OPERAND_1;
            this.currentOperand = this.operand1;
        } 
        else if (this.currentState == CALCULATION_STATE.INSERT_OPERATOR) {
            this.currentState = CALCULATION_STATE.INSERT_OPERAND_2;
            this.currentOperand = this.operand2;
        }
    }

    performContinuousCalculation() {
        if (this.currentState == CALCULATION_STATE.INSERT_OPERAND_2) {
            this.operand1 = this.performCalculation();
            this.operand2 = new IntegerOperand();
        }
        else if (this.currentState == CALCULATION_STATE.START) {
            this.operand1 = (this.lastResult instanceof ErrorOperand) ? new Operand() : this.lastResult;
        }
    }

    get oprand1Value() {
        return this.operand1.getValueString();
    }

    get oprand2Value() {
        return this.operand2.getValueString();
    }

    get lastResultValue() {
        return this.lastResult.getValueString();
    }
}