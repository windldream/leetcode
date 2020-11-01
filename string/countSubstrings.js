/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  const m = s.length
  const n = t.length
  const map = new Map()
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j <= m; j++) {
      const str = s.substring(i, j)
      if (map.get(str)) {
        ans += map.get(str)
        continue
      }
      let count = 0
      for (let i1 = 0; i1 <= n - str.length; i1++) {
        const str1 = t.substring(i1, i1 + str.length)
        if (check(str, str1)) count++
      }
      ans += count
      map.set(str, count)
    }
  }
  return ans

  function check(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        if (count) return false
        count++
      }
    }
    return count === 1
  }
}

countSubstrings('aba', 'baba')
