/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)
  const ans = []
  backtracking(0, [])
  return ans

  function backtracking(index, choose) {
    ans.push(choose.slice())
    if (choose.length === nums.length) return
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i - 1] === nums[i]) continue
      choose.push(nums[i])
      backtracking(i + 1, choose)
      choose.pop()
    }
  }
}

subsetsWithDup([1, 2, 2])
