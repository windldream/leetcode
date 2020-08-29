/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  if (num === 0) return 0
  if (num % 2 === 0) return numberOfSteps(num / 2) + 1
  else return numberOfSteps(num - 1) + 1
}
