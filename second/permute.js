/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  backtracking([], nums, ans)
  return ans

  function backtracking(path, nums, ans) {
    if (path.length === nums.length) {
      ans.push(path.slice())
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      path.push(nums[i])
      backtracking(path, nums, ans)
      path.pop()
    }
  }
}
