/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let l = 0
  let r = removable.length
  let ans = 0
  while (l <= r) {
    const k = (l + r) >> 1
    if (isSub(s.split(''), p, removable, k)) {
      l = k + 1
      ans = k
    } else {
      r = k - 1
    }
  }
  return ans

  function isSub(s, p, r, k) {
    for (let i = 0; i < k; i++) s[r[i]] = 0
    for (let i = 0, j = 0; i < s.length; i++) {
      if (s[i] === p[j]) j++
      if (j === p.length) return true
    }
    return false
  }
}
