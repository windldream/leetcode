/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  if (n < 3) return []
  const ans = []
  backtracking(n, 2, [])
  return ans

  function backtracking(n, i, path) {
    if (n === 1) {
      if (path.length > 1) {
        ans.push(path.slice())
      }
    } else {
      for (let j = i; j <= n; j++) {
        if (n % j === 0) {
          path.push(j)
          backtracking(n / j, j, path)
          path.pop()
        }
      }
    }
  }
}
