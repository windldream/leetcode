/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let ans = 0
  const visited = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (ans > nums.length >> 1) return ans
    if (visited.has(nums[i])) continue
    visited.add(nums[i])
    let cur = nums[nums[i]]
    let curmax = 1
    while (nums[i] !== cur) {
      visited.add(cur)
      curmax++
      cur = nums[cur]
    }
    ans = Math.max(ans, curmax)
  }
  return ans
}

arrayNesting([5, 4, 0, 3, 1, 6, 2])
