/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  if (A.length === 1) {
    return [...A[0]]
  }
  const map = new Map()
  for (const c of A[0]) {
    if (!map.has(c)) {
      map.set(c, 0)
    }
    map.set(c, map.get(c) + 1)
  }

  const ans = []
  for (const [key, val] of map) {
    let count = val
    for (let i = 1; i < A.length; i++) {
      const countMap = new Map()
      const word = A[i]
      for (const c of word) {
        if (!countMap.has(c)) {
          countMap.set(c, 0)
        }
        countMap.set(c, countMap.get(c) + 1)
      }
      count = Math.min(count, countMap.get(key) || 0)
    }
    while (count) {
      ans.push(key)
      count--
    }
  }
  return ans
}
