/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function (coins) {
  coins.sort((a, b) => a - b)
  if (coins[0] > 1) return 1
  let ans = 1
  for (let i = 1; i < coins.length; i++) {
    if (coins[i] <= ans + 1) {
      ans += coins[i]
    } else {
      break
    }
  }
  return ans + 1
}

// 1 2  4
