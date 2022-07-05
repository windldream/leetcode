/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const g = Array(n)
    .fill(0)
    .map(() => new Set())
  const ug = Array(n)
    .fill(0)
    .map(() => new Set())

  for (const [u, v] of connections) {
    g[u].add(v)
    ug[u].add(v)
    ug[v].add(u)
  }

  const queue = [0]
  const visited = Array(n).fill(false)
  let num = 0
  visited[0] = true

  while (queue.length) {
    const u = queue.shift()

    for (const v of ug[u]) {
      if (!visited[v]) {
        if (!g[v].has(u)) num++
        queue.push(v)
        visited[v] = true
      }
    }
  }

  return num
}
