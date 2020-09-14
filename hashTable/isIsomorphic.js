/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  return check(s, t) && check(t, s)
  function check(s, t) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        if (map.get(s[i]) !== t[i]) return false
      } else {
        map.set(s[i], t[i])
      }
    }
    return true
  }
}

isIsomorphic('paper', 'title')
