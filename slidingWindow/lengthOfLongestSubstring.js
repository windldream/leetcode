/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const sMap = new Map()
  let l = 0
  let r = 0
  let ans = 0

  while (r < s.length) {
    if (!sMap.has(s[r])) sMap.set(s[r], 0)
    sMap.set(s[r], sMap.get(s[r]) + 1)

    while (!check(sMap)) {
      sMap.set(s[l], sMap.get(s[l]) - 1)
      l++
    }

    r++
    ans = Math.max(ans, r - l)
  }

  return ans

  function check(map) {
    for (const val of map.values()) {
      if (val > 1) return false
    }

    return true
  }
}
