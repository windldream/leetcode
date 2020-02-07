/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k === num.length) {
    return '';
  }
  const arr = num.split('');

  for (let n = 9; n >= 0; n--) {
    for (let i = 0; i < arr.length && k > 0; i++) {
      if (arr[i] == n) {
        arr.splice(i, 1);
        i--;
        k--;
      }
    }
  }

  return arr.join('');
};

console.log(removeKdigits('1432219', 3));
