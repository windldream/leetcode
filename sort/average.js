/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b)
  const len = salary.length
  let sum = 0
  for (let i = 1; i < len - 1; i++) {
    sum += salary[i]
  }
  return sum / (len - 2)
}
