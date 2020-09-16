/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  const map = new Map()
  for (const num of A) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    if (map.get(num) === A.length >> 1) return num
  }
}
