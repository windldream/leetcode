/**
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  const memo = new Map()
  return dfs(n)

  function dfs(n) {
    if (n === 1 || n === 0) return 1
    if (memo.has(n)) return memo.get(n)
    let ans = Math.min((n % 2) + dfs(Math.floor(n / 2)) + 1, (n % 3) + dfs(Math.floor(n / 3)) + 1)
    memo.set(n, ans)
    return ans
  }
}
