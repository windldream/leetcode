/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath = function (n, graph, start, target) {
  const g = Array(n)
    .fill(0)
    .map(() => new Set())
  for (const [u, v] of graph) {
    g[u].add(v)
  }

  const visited = new Set()
  const queue = [start]
  visited.add(start)
  while (queue.length) {
    const u = queue.shift()
    if (u === target) return true
    for (const v of g[u]) {
      if (!visited.has(v)) {
        queue.push(v)
      }
    }
  }
  return false
}

findWhetherExistsPath(
  12,
  [
    [0, 1],
    [1, 2],
    [1, 3],
    [1, 10],
    [1, 11],
    [1, 4],
    [2, 4],
    [2, 6],
    [2, 9],
    [2, 10],
    [2, 4],
    [2, 5],
    [2, 10],
    [3, 7],
    [3, 7],
    [4, 5],
    [4, 11],
    [4, 11],
    [4, 10],
    [5, 7],
    [5, 10],
    [6, 8],
    [7, 11],
    [8, 10]
  ],
  2,
  3
)
