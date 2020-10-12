/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const memo = new Map()
  return dfs(n)

  function dfs(n) {
    if (n === 0) return false
    if (memo.has(n)) return memo.get(n)
    const sq = Math.floor(Math.sqrt(n))
    if (sq * sq === n) return true
    for (let i = sq; i > 0; i--) {
      if (!dfs(n - i * i)) {
        memo.set(n, true)
        return true
      }
    }
    memo.set(n, false)
    return false
  }
}

winnerSquareGame(2)
