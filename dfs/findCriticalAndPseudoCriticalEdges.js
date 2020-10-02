/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function (n, edges) {
  const m = edges.length
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i]
    ;[edge[0], edge[2]] = [edge[2], edge[0]]
    edge.push(i)
  }
  edges.sort((a, b) => a[0] - b[0])

  const minCost = work1(n, edges, -1)
  const ans = [[], []]
  for (let i = 0; i < m; i++) {
    if (work1(n, edges, i) > minCost) {
      ans[0].push(i)
    } else if (work2(n, edges, i) === minCost) {
      ans[1].push(i)
    }
  }
  return ans

  function find(a, parent) {
    if (a !== parent[a]) {
      parent[a] = find(parent[a], parent)
    }
    return parent[a]
  }

  function work1(n, edges, k) {
    const parent = Array(n)
      .fill(0)
      .map((val, index) => index)
    let cost = 0
    let count = 0
    for (const edge of edges) {
      if (edge[3] === k) continue
      const f1 = find(edge[1], parent)
      const f2 = find(edge[2], parent)
      if (f1 !== f2) {
        cost += edge[0]
        count++
        if (count === n - 1) break
        parent[f1] = f2
      }
    }
    if (count === n - 1) return cost
    return Infinity
  }

  function work2(n, edges, k) {
    const parent = Array(n)
      .fill(0)
      .map((val, index) => index)
    let cost = 0
    let count = 0
    for (const edge of edges) {
      if (edge[3] === k) {
        cost += edge[0]
        count++
        parent[edge[1]] = edge[2]
        break
      }
    }

    for (const edge of edges) {
      const f1 = find(edge[1], parent)
      const f2 = find(edge[2], parent)
      if (f1 !== f2) {
        cost += edge[0]
        count++
        if (count === n - 1) break
        parent[f1] = f2
      }
    }
    if (count === n - 1) return cost
    return Infinity
  }
}
