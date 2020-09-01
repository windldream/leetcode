/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const sMap = new Map()
  for (const s of s1) {
    if (!sMap.has(s)) {
      sMap.set(s, 0)
    }
    sMap.set(s, sMap.get(s) + 1)
  }

  let l = 0
  let r = 0
  let countMap = new Map()
  while (r < s2.length) {
    if (!s1.includes(s2[r])) {
      r++
      l = r
      countMap.clear()
      continue
    }
    if (!countMap.has(s2[r])) {
      countMap.set(s2[r], 0)
    }
    countMap.set(s2[r], countMap.get(s2[r]) + 1)
    while (countMap.get(s2[l]) > sMap.get(s2[l]) && l <= r) {
      countMap.set(s2[l], countMap.get(s2[l]) - 1)
      l++
    }
    if (isContain(sMap, countMap)) return true
    r++
  }
  return false

  function isContain(sMap, countMap) {
    if (sMap.size !== countMap.size) return false
    for (const [key, val] of sMap) {
      if (!countMap.has(key) || countMap.get(key) !== val) return false
    }
    return true
  }
}

checkInclusion('ab', 'eidboaoo')
