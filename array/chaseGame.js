/**
 * @param {number[][]} edges
 * @param {number} startA
 * @param {number} startB
 * @return {number}
 */
var chaseGame = function (edges, startA, startB) {
  const g = new Map()
  for (const [u, v] of edges) {
    if (!g.has(u)) g.set(u, new Set())
    if (!g.has(v)) g.set(v, new Set())
    g.get(u).add(v)
    g.get(v).add(u)
    if ((u === startA && v === startB) || (v === startA && u === startB)) return 1
  }

  const n = edges.length
  const depth = Array(n + 1).fill(0)
  const parent = Array(n + 1).fill(0)
  const inLoop = Array(n + 1).fill(false)
  let loop = 0
  dfs(1, 0)

  const disA = bfs(startA, false)
  const disB = bfs(startB, false)

  if (loop >= 4) {
    const dis = bfs(startB, true)
    if (dis[1] + 1 < disA[dis[0]]) return -1
  }

  let ans = 0
  for (let i = 1; i <= n; i++) {
    if (disA[i] > disB[i] + 1) {
      ans = Math.max(ans, disA[i])
    }
  }
  return ans

  function bfs(u, detectLoop) {
    const dis = Array(n + 1).fill(Infinity)
    const queue = []
    dis[u] = 0
    queue.push(u)
    while (queue.length) {
      const x = queue.shift()
      if (detectLoop && inLoop[x]) {
        return [x, dis[x]]
      }
      if (g.has(x)) {
        for (const y of g.get(x)) {
          if (dis[y] <= dis[x] + 1) continue
          dis[y] = dis[x] + 1
          queue.push(y)
        }
      }
    }
    return dis
  }

  function dfs(u, p) {
    parent[u] = p
    depth[u] = depth[p] + 1
    if (g.has(u)) {
      for (const v of g.get(u)) {
        if (v === p) continue
        if (!depth[v]) {
          dfs(v, u)
        } else if (depth[v] < depth[u]) {
          let cur = u
          while (cur !== v) {
            inLoop[cur] = true
            loop++
            cur = parent[cur]
          }
          inLoop[v] = true
          loop++
        }
      }
    }
  }
}
