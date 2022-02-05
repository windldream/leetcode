/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pMap = new Map()

  for (const ch of p) {
    setMap(pMap, ch)
  }

  let l = 0
  let r = 0
  let ans = []
  const sMap = new Map()

  while (r < s.length) {
    setMap(sMap, s[r])

    while (check(sMap, pMap) === 1) {
      sMap.set(s[l], sMap.get(s[l]) - 1)
      if (sMap.get(s[l]) === 0) sMap.delete(s[l])
      l++
    }

    r++
    if (check(sMap, pMap) === 2) ans.push(l)
  }

  return ans

  // 0 less
  // 1 more
  // 2 equal
  function check(sMap, pMap) {
    for (const [key, val] of pMap) {
      if (!sMap.has(key) || sMap.get(key) < val) return 0
      if (sMap.get(key) > val) return 1
    }

    return sMap.size > pMap.size ? 1 : 2
  }

  function setMap(map, key) {
    if (!map.has(key)) map.set(key, 0)
    map.set(key, map.get(key) + 1)
  }
}
