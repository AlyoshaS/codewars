/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their
phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse
one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes
(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).
*/

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