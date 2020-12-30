/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const dietPlanPerformance = function(calories, k, lower, upper) {
  const len = calories.length
  let ans = 0
  for (let i = 0; i < len - k + 1; i++) {
    let sum = 0
    for (let j = 0; j < k && i + j < len; j++) {
      sum += calories[i + j]
    }
    if (sum > upper) ans++
    else if (sum < lower) ans--
  }
  return ans
};