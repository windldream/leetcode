/**
 * @param {number} n
 * @return {number}
 */
const sumNums = function(n) {
  return n && n + sumNums(n - 1)
};