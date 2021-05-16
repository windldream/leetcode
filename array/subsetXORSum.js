/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let ans = 0
  backtracking(0, nums, 0)
  return ans

  function backtracking(idx, nums, sum) {
    ans += sum
    if (idx === nums.length) return
    for (let i = idx; i < nums.length; i++) {
      backtracking(i + 1, nums, sum ^ nums[i])
    }
  }
}
