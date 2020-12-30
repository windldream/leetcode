/**
 * @param {number[]} A
 * @return {number}
 */
const largestUniqueNumber = function(A) {
  const map = new Map()
  for (const num of A) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  const keys = [...map.keys()].sort((a, b) => a - b)
  for (let i = keys.length - 1; i >= 0; i--) {
    if (map.get(keys[i]) === 1) return keys[i]
  }
  return -1
};