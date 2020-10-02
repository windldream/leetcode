/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const points = Array(n)
    .fill(0)
    .map(() => [])
  for (const [u, v] of edges) {
    points[u].push(v)
    points[v].push(u)
  }

  const ls = []
  for (let i = 0; i < n; i++) {
    ls[i] = labels[i].charCodeAt() - 'a'.charCodeAt()
  }

  const res = Array(n).fill(0)
  const visited = new Set()
  visited.add(0)
  dfs(0, points, ls)
  return res

  function dfs(i, points, ls) {
    const curLs = Array(26).fill(0)
    curLs[ls[i]] += 1
    for (const child of points[i]) {
      if (visited.has(child)) continue
      visited.add(child)
      const childLs = dfs(child, points, ls)
      for (let k = 0; k < 26; k++) {
        curLs[k] += childLs[k]
      }
    }
    res[i] = curLs[ls[i]]
    return curLs
  }
}
