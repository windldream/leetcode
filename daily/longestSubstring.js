/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  const totalMap = new Map()
  for (const c of s) {
    totalMap.set(c, (totalMap.get(c) || 0) + 1)
  }

  const splits = []
  const n = s.length
  for (let i = 0; i < n; i++) {
    if (totalMap.get(s[i]) < k) splits.push(i)
  }
  if (splits.length === 0) return n

  splits.push(n)
  let ans = 0
  let l = 0
  for (const index of splits) {
    const len = index - l
    if (len > ans) {
      ans = Math.max(ans, longestSubstring(s.substring(l, index), k))
    }
    l = index + 1
  }
  return ans
}

longestSubstring('baaabcb', 3)

// 向又扩张有可能满足
// 向左扩张有可能满足
