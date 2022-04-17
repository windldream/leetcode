/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const ans = []
  backtracking(0, [], 0)

  return ans

  function backtracking(idx, list, sum) {
    if (sum === target) {
      ans.push(list.slice())
      return
    }

    if (sum > target) return

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue
      list.push(candidates[i])
      backtracking(i + 1, list, sum + candidates[i])
      list.pop()
    }
  }
}
