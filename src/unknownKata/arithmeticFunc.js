const arithmetic = (a, b, operator) => {
  const add = a + b
  const subtract = a - b
  const divide = b !== 0 ? a / b : 'B must be greater than 0.'
  const multiply = a * b

  switch(operator) {
    case 'add':
      return add
    case 'subtract':
      return subtract
    case 'divide':
      return divide
    case 'multiply':
      return multiply
    default:
      return 'Operator not supported.'
  }
}

console.log(arithmetic(1, 2, 'add')) // 3
console.log(arithmetic(8, 2, "subtract")) // 6
console.log(arithmetic(5, 2, "multiply")) // 10
console.log(arithmetic(8, 2, "divide")) // 4
