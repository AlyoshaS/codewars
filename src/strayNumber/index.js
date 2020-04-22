const stray = (numbers) => numbers.filter((number, i, arr) => arr.indexOf(number) === i)

console.log(stray([1, 1, 3 ]))