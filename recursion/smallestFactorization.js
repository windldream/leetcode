/**
 * @param {number} a
 * @return {number}
 */
const smallestFactorization = function (a) {
  const ans = dfs(a)
  return ans > 2 ** 31 - 1 ? 0 : ans

  function dfs(num) {
    if (num < 10) return num
    let ans = Infinity
    for (let i = 9; i > 1; i--) {
      if (num % i === 0) {
        const val = dfs(num / i)
        if (val === Infinity) continue
        const n = val * 10 + i
        ans = Math.min(ans, n)
        break
      }
    }
    return ans
  }
}

smallestFactorization(678)
