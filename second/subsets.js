/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  nums.sort((a, b) => a - b)
  const ans = []
  backtracking([], nums, ans)
  return ans

  function backtracking(path, nums, ans) {
    ans.push(path.slice())
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      if (path.length && path[path.length - 1] > nums[i]) continue
      path.push(nums[i])
      backtracking(path, nums, ans)
      path.pop()
    }
  }
}
