/**
 * @param {number} target
 * @param {number} inc
 * @param {number} dec
 * @param {number[]} jump
 * @param {number[]} cost
 * @return {number}
 */
var busRapidTransit = function (target, inc, dec, jump, cost) {
  const mod = 10 ** 9 + 7
  const memo = new Map()
  return dfs(target) % mod

  function dfs(target) {
    if (target === 0) return 0
    if (memo.has(target)) return memo.get(target)
    let ans = target * inc
    if (target > 1) {
      for (let i = 0; i < jump.length; i++) {
        if (target % jump[i] === 0) {
          ans = Math.min(ans, dfs(target / jump[i]) + cost[i])
        } else {
          const m = target % jump[i]
          if (target - m > 0) {
            ans = Math.min(ans, m * inc + cost[i] + dfs(Math.trunc(target / jump[i])))
          }
          ans = Math.min(ans, (jump[i] - m) * dec + cost[i] + dfs(Math.trunc(target / jump[i]) + 1))
        }
      }
    }
    memo.set(target, ans)
    return ans
  }
}
