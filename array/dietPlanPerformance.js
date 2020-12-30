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
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += calories[i]
  }
  if (sum > upper) ans++
  else if (sum < lower) ans--
  for (let i = k; i < len; i++) {
    sum -= calories[i - k]
    sum += calories[i]
    if (sum > upper) ans++
    else if (sum < lower) ans--
  }
  return ans
};