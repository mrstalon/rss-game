import getRandomNumber from '../getRandomNumber'

class MathCalculator {
  constructor() {
    this.mathOperations = ['+', '-', '*']
    this.num1
    this.num2
    this.operation
    this.result
  }

  getSequenceTask() {
    const num1 = getRandomNumber(10, 50)
    const sequencer = getRandomNumber(1, 5)
    const mathOperationNum = getRandomNumber(1, 3)
    let num2
    let result

    if (mathOperationNum === 1) {
      num2 = num1 + sequencer
      result = num1 + 2 * sequencer
    } else {
      num2 = num1 - sequencer
      result = num1 - 2 * sequencer
    }

    return {
      num1,
      num2,
      result
    }
  }

  getEquelityTask() {
    this.setRandomNumbers(20, 50)
    const { num1, num2 } = this
    if (num1 < num2) {
      this.operation = '<'
    } else if (num1 > num2) {
      this.operation = '>'
    } else {
      this.operation = '='
    }
    
    return {
      num1,
      num2,
      operation: this.operation
    }
  }

  getMathTask() {
    this.setRandomNumbers(1, 15)
    this.setRandomMathOperation()
    this.setResult()
    const { num1, num2, operation, result } = this
    return {
      num1,
      num2,
      operation,
      result
    }
  }

  setRandomNumbers(from, to) {
    this.num1 = getRandomNumber(from, to)
    this.num2 = getRandomNumber(from, to)
  }

  setRandomMathOperation() {
    const randomOperationId = getRandomNumber(0, 3)
    this.operation = this.mathOperations[randomOperationId]
  }

  setResult() {
    let resultToSet
    switch (this.operation) {
      case '+': {
        resultToSet = this.num1 + this.num2
        break
      }
      case '-': {
        if (this.num1 < this.num2) {
          let tempNum = this.num2
          this.num2 = this.num1
          this.num1 = tempNum
        }
        resultToSet = this.num1 - this.num2
        break
      }
      case '*': {
        resultToSet = this.num1 * this.num2
        break
      }
    }
    this.result = resultToSet
  }
}

const mathCalculator = new MathCalculator()

export default mathCalculator
