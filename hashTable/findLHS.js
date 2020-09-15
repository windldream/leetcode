/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
  }

  let ans = 0
  for (const num of map.keys()) {
    if (map.has(num + 1)) {
      ans = Math.max(ans, map.get(num) + map.get(num + 1))
    }
  }
  return ans
}
