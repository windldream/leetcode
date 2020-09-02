/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function (s) {
  const len = s.length
  const aver = len / 4
  let l = 0
  let r = 0
  let ans = Infinity

  const total = new Map()
  for (const c of s) {
    if (!total.has(c)) {
      total.set(c, 0)
    }
    total.set(c, total.get(c) + 1)
  }

  while (r < len) {
    total.set(s[r], total.get(s[r]) - 1)
    while (l < len && isValid(total, aver)) {
      total.set(s[l], total.get(s[l]) + 1)
      ans = Math.min(ans, r - l + 1)
      l++
    }
    r++
  }

  return ans

  function isValid(count, aver) {
    for (const key of ['Q', 'W', 'E', 'R']) {
      if (count.get(key) > aver) return false
    }
    return true
  }
}

balancedString('QQWE')
