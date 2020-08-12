/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  let count = 0
  const visited = Array(N + 1).fill(0)
  backtrack(N, 1, visited)
  return count

  function backtrack(n, pos, visited) {
    if (pos > n) count++
    for (let i = 1; i <= n; i++) {
      if (!visited[i] && (pos % i === 0 || i % pos === 0)) {
        visited[i] = 1
        backtrack(n, pos + 1, visited)
        visited[i] = 0
      }
    }
  }
}
