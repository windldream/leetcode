/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = []
  backtracking([])

  return ans

  function backtracking(list) {
    if (list.length === nums.length) {
      ans.push(list.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (list.includes(nums[i])) continue

      list.push(nums[i])
      backtracking(list)
      list.pop()
    }
  }
}
