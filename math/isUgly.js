/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  const uglyArr = [2, 3, 4, 5];

  if (num === 1) {
    return true;
  }

  while (true) {
    if (num < 6) {
      return uglyArr.includes(num);
    }
    if (Number.isInteger(num / 2)) {
      num = num / 2;
      continue;
    } else if (Number.isInteger(num / 3)) {
      num = num / 3;
      continue;
    } else if (Number.isInteger(num / 5)) {
      num = num / 5;
      continue;
    }
    return false;
  }
};

console.log(isUgly(14))