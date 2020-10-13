/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  const len = nums.length
  let sum = 0
  const map = new Map()
  map.set(0, 0)
  let ans = 0
  let pos = -1
  for (let i = 1; i <= len; i++) {
    sum += nums[i - 1]
    const rest = sum - target
    if (map.has(rest) && map.get(rest) > pos) {
      ans++
      pos = i - 1
    }
    map.set(sum, i)
  }
  return ans
}
