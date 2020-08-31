/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (k >= s.length - 1) return s.length

  let l = 0
  let r = 0
  let ans = 1
  let count = Array(26).fill(0)
  let curMax = 0

  while (r < s.length) {
    count[getIndex(s[r])] += 1
    curMax = Math.max(curMax, count[getIndex(s[r])])
    // 当 curMax + k >= r - l + 1 时 字符串符合条件
    while (r - l + 1 > curMax + k) {
      count[getIndex(s[l])] -= 1
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans

  function getIndex(c) {
    return c.toLowerCase().charCodeAt() - 'a'.charCodeAt()
  }
}
