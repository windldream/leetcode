/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function (A) {
  A.sort((a, b) => a - b)
  const map = new Map()
  for (const num of A) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    if (num < 0) {
      if (map.has(num * 2)) {
        map.set(num, map.get(num) - 1)
        map.set(num * 2, map.get(num * 2) - 1)
        if (map.get(num) === 0) {
          map.delete(num)
        }
        if (map.get(num * 2) === 0) {
          map.delete(num * 2)
        }
      }
    } else if (num > 0) {
      if (map.has(num / 2)) {
        map.set(num, map.get(num) - 1)
        map.set(num / 2, map.get(num / 2) - 1)
        if (map.get(num) === 0) {
          map.delete(num)
        }
        if (map.get(num / 2) === 0) {
          map.delete(num / 2)
        }
      }
    }
  }

  return map.size === 0 || (map.size === 1 && map.get(0) >> 1 > 0)
}

canReorderDoubled([4, -4, 4, -2, -4, -8])
