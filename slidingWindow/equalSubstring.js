/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let l = 0
  let r = 0
  let cost = 0
  let ans = 0
  while (r < s.length) {
    cost += getCost(s[r], t[r])
    while (cost > maxCost) {
      cost -= getCost(s[l], t[l])
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans

  function getCost(a, b) {
    return Math.abs(a.charCodeAt() - b.charCodeAt())
  }
}
