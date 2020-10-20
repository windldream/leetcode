/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
  const map = new Map()
  for (const s of strs) {
    for (let state = 0; state < 1 << s.length; state++) {
      let t = ''
      for (let j = 0; j < s.length; j++) {
        if ((state >> j) & 1) {
          t += s[j]
        }
      }
      if (map.has(t)) {
        map.set(t, map.get(t) + 1)
      } else {
        map.set(t, 1)
      }
    }
  }

  let res = -1
  for (const [key, val] of map) {
    if (val === 1) {
      res = Math.max(res, key.length)
    }
  }
  return res
}

findLUSlength(['aba', 'cdc', 'eae'])
