/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  const len = s.length
  let cost = 0
  let l = 0
  let r = 0
  let ans = 0
  while (r < len) {
    cost += getCost(s, t, r++)
    while (l <= r && cost > maxCost) {
      cost -= getCost(s, t, l++)
    }
    ans = Math.max(ans, r - l)
  }
  return ans

  function getCost(s, t, i) {
    return Math.abs(s[i].charCodeAt() - t[i].charCodeAt())
  }
}
