/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
  const n = stoneValue.length
  const memo = Array(n)
  const ans = dfs(stoneValue, 0)
  if (ans > 0) {
    return 'Alice'
  } else if (ans < 0) {
    return 'Bob'
  }
  return 'Tie'

  function dfs(stoneValue, start) {
    const len = stoneValue.length
    if (start === len) return 0
    if (memo[start] !== undefined) return memo[start]
    let ans = stoneValue[start] - dfs(stoneValue, start + 1)
    if (start + 1 < len) {
      ans = Math.max(ans, stoneValue[start] + stoneValue[start + 1] - dfs(stoneValue, start + 2))
    }
    if (start + 2 < len) {
      ans = Math.max(
        ans,
        stoneValue[start] + stoneValue[start + 1] + stoneValue[start + 2] - dfs(stoneValue, start + 3)
      )
    }
    return (memo[start] = ans)
  }
}
