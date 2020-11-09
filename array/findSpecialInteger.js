/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const len = arr.length
  const map = new Map()
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    if (map.get(num) > len / 4) return num
  }
}
