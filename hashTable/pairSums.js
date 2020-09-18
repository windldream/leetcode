/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function (nums, target) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  const res = []
  for (const [key, val] of map) {
    if (map.has(target - key)) {
      let count = Math.min(val, map.get(target - key))
      if (key === target - key) {
        count = val >> 1
      }
      while (count) {
        res.push([key, target - key])
        count--
      }
      map.delete(key)
    }
  }
  return res
}
