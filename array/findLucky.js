/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map()
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  const keys = [...map.keys()].sort((a, b) => a - b)
  for (let i = keys.length - 1; i >= 0; i--) {
    if (keys[i] === map.get(keys[i])) return keys[i]
  }
  return -1
}

findLucky([1, 2, 2, 3, 3, 3])
