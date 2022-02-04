/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const map = new Map()

  for (const ch of s1) {
    if (!map.has(ch)) map.set(ch, 0)
    map.set(ch, map.get(ch) + 1)
  }

  let l = 0
  let r = 0
  let totalMap = new Map()

  while (r < s2.length) {
    if (!totalMap.has(s2[r])) totalMap.set(s2[r], 0)
    totalMap.set(s2[r], totalMap.get(s2[r]) + 1)

    while (checkVal(map, totalMap) === 0) {
      totalMap.set(s2[l], totalMap.get(s2[l]) - 1)
      if (totalMap.get(s2[l]) === 0) totalMap.delete(s2[l])
      l++
    }

    if (checkVal(map, totalMap) === 2) return true

    r++
  }

  return false

  function checkVal(map, totalMap) {
    for (const key of totalMap.keys()) {
      if (!map.has(key)) return 0
    }

    for (const [key, val] of map) {
      if (totalMap.has(key) && totalMap.get(key) > val) return 0
      if (!totalMap.has(key) || totalMap.get(key) < val) return 1
    }

    return 2
  }
}

checkInclusion('hello', 'ooolleoooleh')
