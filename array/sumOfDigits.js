/**
 * @param {number[]} A
 * @return {number}
 */
const sumOfDigits = function(A) {
  let min = Math.min(...A)
  let ans = 0
  while (min > 0) {
    ans += min % 10
    min = Math.trunc(min / 10)
  }
  return (ans & 1) ? 0 : 1
};