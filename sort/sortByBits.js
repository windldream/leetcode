/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  arr.sort((a, b) => {
    const x = a
      .toString(2)
      .split('')
      .filter(val => val === '1').length;
    const y = b
      .toString(2)
      .split('')
      .filter(val => val === '1').length;
    if (x === y) {
      return a - b;
    } else {
      return x - y;
    }
  });
  return arr;
};
