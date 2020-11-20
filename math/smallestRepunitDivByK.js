/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function (K) {
  if (K % 2 === 0 || K % 5 === 0) return -1
  let temp = 1
  let len = 1
  while (temp % K !== 0) {
    temp = temp % K
    temp = temp * 10 + 1
    len++
  }
  return len
}
