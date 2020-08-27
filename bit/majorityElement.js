/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map()
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 0)
    }
    map.set(num, map.get(num) + 1)
    if (map.get(num) > nums.length / 2) return num
  }
}
