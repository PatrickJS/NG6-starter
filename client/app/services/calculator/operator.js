class arithmeticOperator {
    constructor() {
        this.sign;
    }

    performCalculation(operand1, operand2) {
    }
}

class Addition extends arithmeticOperator {
    constructor() {
        super();
        this.sign = "+";
    }

    performCalculation(operand1, operand2) {
        return new Operand(operand1.value + operand2.value);
    }
}

class Subtraction extends arithmeticOperator {
    constructor() {
        super();
        this.sign = "-";
    }

    performCalculation(operand1, operand2) {
        return new Operand(operand1.value - operand2.value);
    }
}

class Multiplication extends arithmeticOperator {
    constructor() {
        super();
        this.sign = "×";
    }

    performCalculation(operand1, operand2) {
        return new Operand(operand1.value * operand2.value);
    }
}

class Division extends arithmeticOperator {
    constructor() {
        super();
        this.sign = "÷";
    }

    performCalculation(operand1, operand2) {
        if (operand2.value == 0) {
            return new ErrorOperand();
        }
        return new Operand(operand1.value / operand2.value);
    }
}

const ARITHMETIC_OPERATORS = {
    ADD: new Addition(),
    SUB: new Subtraction(), 
    MUL: new Multiplication(),
    DIV: new Division()
};