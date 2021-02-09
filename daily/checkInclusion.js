/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const counter1 = new Map()
  for (const s of s1) {
    counter1.set(s, (counter1.get(s) || 0) + 1)
  }
  let l = 0
  let r = 0
  const counter2 = new Map()
  while (r < s2.length) {
    counter2.set(s2[r], (counter2.get(s2[r]) || 0) + 1)
    r++
    while (!contain(counter1, counter2) && l < r) {
      counter2.set(s2[l], counter2.get(s2[l]) - 1)
      if (counter2.get(s2[l]) === 0) counter2.delete(s2[l])
      l++
    }
    if (equal(counter1, counter2)) return true
  }
  return false

  function contain(map1, map2) {
    for (const [key, val] of map2) {
      if (!map1.has(key) || map1.get(key) < val) return false
    }
    return true
  }

  function equal(map1, map2) {
    if (map1.size !== map2.size) return false
    for (const [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false
    }
    return true
  }
}

checkInclusion('ab', 'eidbaooo')
