/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  let ans = 0
  for (const val of map.values()) {
    if (val > 1) {
      ans += (val * (val - 1)) / 2
    }
  }
  return ans
}
