/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
  if (s.length !== t.length) return false
  const len = s.length
  const seen = Array(26)
    .fill(0)
    .map(() => new Set())
  const max = Math.trunc(k / 26)
  const mod = k % 26
  for (let i = 0; i < len; i++) {
    if (s[i] !== t[i]) {
      let diff = t[i].charCodeAt() - s[i].charCodeAt()
      if (diff < 0) {
        diff = diff + 26
      }
      if (k < diff) return false
      if (seen[diff].size < max || (diff <= mod && seen[diff].size <= max)) {
        seen[diff].add(seen[diff].size)
      } else {
        return false
      }
    }
  }
  return true
}

canConvertString('atmtxzjkz', 'tvbtjhvjd', 35)
