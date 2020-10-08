/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const n = stoneValue.length
  const dp = Array(n + 3).fill(0)
  let sum = 0
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = -Infinity
    sum += stoneValue[i]
    for (let j = 1; j <= 3; j++) {
      dp[i] = Math.max(dp[i], sum - dp[i + j])
    }
  }

  if (dp[0] > sum - dp[0]) {
    return 'Alice'
  } else if (dp[0] < sum - dp[0]) {
    return 'Bob'
  } else {
    return 'Tie'
  }
}
