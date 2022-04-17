/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const ans = []
  backtracking(0, [], 0)

  return ans

  function backtracking(idx, list, sum) {
    if (sum > target) return

    if (sum === target) {
      ans.push(list.slice())
      return
    }

    for (let i = idx; i < candidates.length; i++) {
      list.push(candidates[i])
      backtracking(i, list, sum + candidates[i])
      list.pop()
    }
  }
}
