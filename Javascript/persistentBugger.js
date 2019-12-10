/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 => and 4 has only one digit
 */

const persistence = (num) => {
  const arr = [...num.toString()].map((n) => parseInt(n))
  const reduceNumber = arr.reduce((a, b) => a * b).toString()

  return arr.length === 1 ? 0 : 1 + persistence(reduceNumber)
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
