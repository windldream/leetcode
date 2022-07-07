/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const list = Array(n + 1).fill(0)
  const degree = Array(n + 1).fill(0)

  for (const [u, v] of trust) {
    list[u] += 1
    degree[v] += 1
  }

  for (let i = 1; i <= n; i++) {
    if (list[i] === 0 && degree[i] === n - 1) return i
  }

  return -1
}
