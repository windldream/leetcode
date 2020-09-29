/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => a - b)
  let l = 0
  let r = piles.length - 1
  let ans = 0
  while (l < r) {
    ans += piles[r - 1]
    l++
    r -= 2
  }
  return ans
}
