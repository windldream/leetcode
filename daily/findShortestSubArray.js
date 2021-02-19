/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map()
  let maxCount = 0
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
    if (map.get(num) > maxCount) {
      maxCount = map.get(num)
    }
  }

  const set = new Set()
  for (const [key, val] of map) {
    if (val === maxCount) set.add(key)
  }

  let ans = Infinity
  for (const num of set) {
    const first = nums.indexOf(num)
    const last = nums.lastIndexOf(num)
    ans = Math.min(ans, last - first + 1)
  }
  return ans
}
