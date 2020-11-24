/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const map = new Map()
  for (const c of s) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  const split = []
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < k) split.push(i)
  }
  if (split.length === 0) return s.length
  let ans = 0
  let left = 0
  split.push(s.length)
  for (let i = 0; i < split.length; i++) {
    const len = split[i] - left
    if (len > ans) ans = Math.max(ans, longestSubstring(s.substr(left, len), k))
    left = split[i] + 1
  }
  return ans
}

longestSubstring('bbaaacbd', 3)
