const testarray = [54, 2, 18, 11, 16, 0, 256];
const sums = testarray
  .filter(cur => cur > 20)
  .reduce((prev, cur) => prev + cur, 0);

console.log(sums);

const strings = ["book", "keyboard", "dom", "class", "tonn"];
const words = strings.filter((word) => word.length >= 5 && word.includes("a"));

console.log(words);

