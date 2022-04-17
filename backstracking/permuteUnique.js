/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const visited = Array(nums.length).fill(false)
  const ans = []
  backtracking(0, [])

  return ans

  function backtracking(idx, list) {
    if (list.length === nums.length) {
      ans.push(list.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) continue

      visited[i] = true
      list.push(nums[i])
      backtracking(i + 1, list)
      visited[i] = false
      list.pop()
    }
  }
}
