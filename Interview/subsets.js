/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = []
  backtracking(nums, [], 0)
  return ans

  function backtracking(nums, sub, idx) {
    if (idx > nums.length) return
    ans.push(sub.slice())
    for (let i = idx; i < nums.length; i++) {
      sub.push(nums[i])
      backtracking(nums, sub, i + 1)
      sub.pop(nums[i])
    }
  }
}

subsets([1, 2, 3])
