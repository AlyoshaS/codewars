String.prototype.toJadenCase = function () {
  const splited = this.split(" ");

  const upperCase = splited.map((word) => {
    const upper = word.charAt(0).toUpperCase();
    const rest = word.slice(1);

    return `${upper}${rest}`;
  });

  return upperCase.join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());
