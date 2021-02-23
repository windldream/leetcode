/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const ans = []
  backtracking(0, [], candidates, target, ans)
  return ans

  function backtracking(sum, path, candidates, target, ans) {
    if (sum > target) return
    if (sum === target) {
      ans.push(path.slice())
      return
    }
    for (let i = 0; i < candidates.length; i++) {
      if (path.length && path[path.length - 1] > candidates[i]) continue
      sum += candidates[i]
      path.push(candidates[i])
      backtracking(sum, path, candidates, target, ans)
      sum -= candidates[i]
      path.pop()
    }
  }
}
