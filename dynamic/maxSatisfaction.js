/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b)
  const n = satisfaction.length
  if (satisfaction[n - 1] <= 0) return 0

  let ans = 0
  let sum = 0
  for (let i = n - 1; i >= 0; i--) {
    sum += satisfaction[i]
    if (sum < 0) break
    ans += sum
  }
  return ans
}

maxSatisfaction([-1, -8, 0, 5, -7])
