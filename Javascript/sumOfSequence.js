/*
Your task is to make
function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non - negative values: begin, end, step.

If begin value is greater than the end,
function should returns 0
*/

const sequenceSum = (begin, end, step) => {
  const sequence = [begin]

  if (begin > end) {
    return 0
  }

  for (let i = 0; sequence[sequence.length - 1] <= end; i++) {
    sequence.push(sequence[i] + step)
  }

  sequence.splice(sequence.length - 1)

  return sequence.reduce((acc, cur) => acc + cur)
};

// Outras soluções bem melhores que essa bosta ^
// const sequenceSum2 = (begin, end, step) => {
//   return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
// };

// const sequenceSum3 = (begin, end, step) => {
//   let sum = 0;
//   for (let i = begin; i <= end; i += step) sum += i;
//   return sum;
// };

console.log(sequenceSum(2, 6, 2)) // 12
console.log(sequenceSum(1, 5, 1)) // 15
console.log(sequenceSum(1, 5, 3)) // 5
