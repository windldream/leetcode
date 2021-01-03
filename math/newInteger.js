/**
 * @param {number} n
 * @return {number}
 */
var newInteger = function(n) {
  let ans = ''
  while (n) {
    ans = n % 9 + '' + ans
    n = Math.trunc(n / 9)
  }
  return +ans
};