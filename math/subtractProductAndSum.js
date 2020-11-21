/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let sum = 0
  let total = 1
  for (const num of n + '') {
    sum += +num
    total *= num
  }
  return total - sum
}
