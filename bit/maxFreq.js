/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  const map = new Map()
  for (let i = 0; i < s.length - minSize + 1; i++) {
    const code = s.substr(i, minSize)
    if (getCount(code) > maxLetters) continue
    if (!map.has(code)) {
      map.set(code, 0)
    }
    map.set(code, map.get(code) + 1)
  }

  let max = 0
  for (const [key, val] of map) {
    max = Math.max(max, val)
  }
  return max

  function getCount(chars) {
    let res = 0
    for (const c of chars) {
      res |= 1 << (c.charCodeAt() - 'a'.charCodeAt())
    }

    let ans = 0
    while (res !== 0) {
      if (res & 1) ans++
      res >>= 1
    }
    return ans
  }
}

maxFreq('aaaa', 1, 3, 3)
