class Operand {
    constructor(value, sign) {
        this.value = (value != undefined) ? value : 0;
        this.sign = (sign != undefined) ? sign : 1;
    }

    switchSign() {
        this.sign *= -1;
        this.value *= -1;
    }

    addDigit(digit) {
    }

    getValueString() {
        return ((this.sign) == -1 && (this.value == 0)) ? "-0" : this.value.toString();
    }
}

class IntegerOperand extends Operand {
    constructor(value, sign) {
        super(value, sign);
    }

    addDigit(digit) {
        this.value = (this.value * 10) + (digit * this.sign);
    }
}

class DecimalOperand extends Operand {
    constructor(value, sign) {
        super(value, sign);
        this.decimalFactor = 0.1;
    }

    addDigit(digit) {
        this.value += (digit * this.sign * this.decimalFactor);
        this.decimalFactor *= 0.1;
    }

    getValueString() {
        let value = ((this.sign) == -1 && (this.value == 0)) ? "-" : "";
        value += (Number.isInteger(this.value)) ? this.value + "." : this.value;
        
        return value;
    }
}

class ErrorOperand extends Operand {
    constructor(value, sign) {
        super(value, sign);
    }

    getValueString() {
        return "Oh no! You can't do that..";
    }
}