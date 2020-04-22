const presses = phrase => {
  const newPhrase = [...phrase.toUpperCase()];
  const oneClick = [
    "A",
    "D",
    "G",
    "J",
    "M",
    "P",
    "T",
    "W",
    " ",
    "",
    "*",
    "#",
    "1"
  ];
  const twoClick = ["B", "E", "H", "K", "N", "Q", "U", "X", "0"];
  const threeClick = ["C", "F", "I", "L", "O", "R", "V", "Y"];
  const fourClick = ["S", "Z", "2", "3", "4", "5", "6", "8"];
  const fiveClick = ["7", "9"];

  const howManyClicks = newPhrase.reduce((clicks, item) => {
    if (oneClick.includes(item)) {
      clicks += 1;
    }
    if (twoClick.includes(item)) {
      clicks += 2;
    }
    if (threeClick.includes(item)) {
      clicks += 3;
    }
    if (fourClick.includes(item)) {
      clicks += 4;
    }
    if (fiveClick.includes(item)) {
      clicks += 5;
    }

    return parseInt(clicks);
  }, "");

  return howManyClicks;
};

console.log(presses("LOL")); // 9
console.log(presses("HOW R U99")); // 26
console.log(presses("99")); // 10
console.log(presses("WHERE DO U WANT 2 MEET L8R")); // 47
