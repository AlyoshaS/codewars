const persistence = (num) => {
  const arr = [...num.toString()].map((n) => parseInt(n))
  const reduceNumber = arr.reduce((a, b) => a * b).toString()

  return arr.length === 1 ? 0 : 1 + persistence(reduceNumber)
}

console.log(persistence(39)) // 3
console.log(persistence(4)) // 0
console.log(persistence(25)) // 2
console.log(persistence(999)) // 4
