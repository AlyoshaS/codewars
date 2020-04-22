const findUniq = (arr) => {
  arr.reduce((previous, currentValue) => {
    let teste = previous - currentValue === 0;
    console.log(currentValue, "prev", previous, teste);

    if (previous - currentValue !== 0) {
      // console.log(currentValue, "prev", previous);
      return previous;
    }
  });
};

console.log(findUniq([0, 0, 1, 0])); // 1

// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([1, 1, 1, 30, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); //10

// const findUniq = (arr) => {
//   return arr.filter((cur, index, arr) => {
//     const previous = arr[index - 1];
//     const next = arr[index + 1];

//     if (cur !== next && previous === next) {
//       return cur;
//     }
//   });
// };
