/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let ans = 0
  for (const coin of coins) {
    ans += Math.ceil(coin / 2)
  }
  return ans
}
