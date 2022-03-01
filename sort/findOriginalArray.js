/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  changed.sort((a, b) => a - b)
  const map = new Map()
  const ans = []

  for (const num of changed) {
    if (!map.has(num) || map.get(num) === 0) {
      map.set(num * 2, (map.get(num * 2) || 0) + 1)
      ans.push(num)
    } else {
      map.set(num, map.get(num) - 1)
      if (map.get(num) === 0) map.delete(num)
    }
  }

  return map.size === 0 ? ans : []
}
