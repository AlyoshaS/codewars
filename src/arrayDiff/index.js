const array_diff = (a, b) => {
  if (a.length === 0) {
    return a
  }

  return a.filter((value) => b.indexOf(value) === -1)
}

console.log(array_diff([1, 2, 2, 2, 3], [2])) // [1, 3]
console.log(array_diff([], [4, 5])) // []
console.log(array_diff([3, 4], [3])) // [4]
console.log(array_diff([1, 8, 2], [])) // [1, 8, 2]
