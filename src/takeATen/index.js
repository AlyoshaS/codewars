const isValidWalk = (walk) => {
  if (walk.length === 10) {
    // um só filter pra todos?
    const north = walk.filter((value) => {
      if ('n' === value) { return value }
    })

    const south = walk.filter((value) => {
      if ('s' === value) { return value }
    })

    const east = walk.filter((value) => {
      if ('e' === value) { return value }
    })

    const west = walk.filter((value) => {
      if ('w' === value) { return value }
    })

    return south.length === north.length && east.length === west.length
  } else {
    return false
  }
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false');

console.log(isValidWalk(['e', 'w', 'e', 'w', 'n', 's', 'n', 's', 'e', 'w']), 'should return true');
console.log(isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's']), 'should return true');
