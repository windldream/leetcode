/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const n = nums.length
  const map = new Map()
  map.set(0, 1)
  let sum = 0
  let ans = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
    if (map.has(sum - goal)) {
      ans += map.get(sum - goal)
    }
    map.set(sum, (map.get(sum) || 0) + 1)
  }
  return ans
}
