/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  const uglyArr = [2, 3, 4, 5];

  if (num === 1) {
    return true;
  }

  if (num < 6) {
    return uglyArr.includes(num);
  }

  if (Number.isInteger(num / 2)) {
    return isUgly(num / 2);
  } else if (Number.isInteger(num / 3)) {
    return isUgly(num / 3);
  } else if (Number.isInteger(num / 5)) {
    return isUgly(num / 5);
  }

  return false;
};

console.log(isUgly(0))