/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPatternMatch = function (pattern, s) {
  const map = new Map()
  const reverseMap = new Map()
  return backtracking(0, 0, map, reverseMap)

  function backtracking(indexP, indexS, map, reverseMap) {
    if (indexP === pattern.length && indexS === s.length) {
      return true
    }
    if (indexP >= pattern.length || indexS.length >= s.length) return false

    const key = pattern[indexP]
    if (map.has(key)) {
      const val = map.get(key)
      if (val !== s.substring(indexS, indexS + val.length)) return false
      return backtracking(indexP + 1, indexS + val.length, map, reverseMap)
    }
    for (let len = 1; indexS + len <= s.length; len++) {
      const val = s.substring(indexS, indexS + len)
      if (reverseMap.has(val)) continue
      map.set(key, val)
      reverseMap.set(val, key)
      if (backtracking(indexP + 1, indexS + len, map, reverseMap)) return true
      map.delete(key)
      reverseMap.delete(val)
    }
    return false
  }
}

wordPatternMatch('aabb', 'xyzabcxzyabc')
