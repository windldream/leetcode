/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tMap = new Map()

  for (const ch of t) {
    setMap(tMap, ch)
  }

  let l = 0
  let r = 0
  const sMap = new Map()
  let ans = ''

  while (r < s.length) {
    setMap(sMap, s[r])
    while (check(tMap, sMap)) {
      const str = s.substring(l, r + 1)
      if (ans === '') {
        ans = str
      } else {
        ans = ans.length > str.length ? str : ans
      }

      sMap.set(s[l], sMap.get(s[l]) - 1)
      if (sMap.get(s[l]) === 0) sMap.delete(s[l])
      l++
    }
    r++
  }

  return ans

  function setMap(map, key) {
    if (!map.has(key)) map.set(key, 0)
    map.set(key, map.get(key) + 1)
  }

  function check(tMap, sMap) {
    for (const [key, val] of tMap) {
      if (!sMap.has(key) || sMap.get(key) < val) return false
    }

    return true
  }
}
