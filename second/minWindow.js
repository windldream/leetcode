/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tMap = new Map()
  for (const c of t) {
    tMap.set(c, (tMap.get(c) || 0) + 1)
  }

  const sMap = new Map()
  let ans = ''
  let l = 0
  let r = 0
  while (r < s.length) {
    sMap.set(s[r], (sMap.get(s[r]) || 0) + 1)
    r++
    let flag = false
    while (flag || (l < r && check(sMap, tMap))) {
      const str = s.substring(l, r)
      if (ans.length === 0) {
        ans = str
      } else {
        if (str.length < ans.length) {
          ans = str
        }
      }
      flag = !tMap.has(s[l])
      sMap.set(s[l], sMap.get(s[l]) - 1)
      l++
    }
  }
  return ans

  function check(sMap, tMap) {
    for (const [key, val] of tMap) {
      if (!sMap.has(key) || sMap.get(key) < val) return false
    }
    return true
  }
}
