/**
 * @param {number[][]} edges
 * @param {number[]} value
 * @return {number}
 */
var maxWeight = function (edges, value) {
  const n = value.length
  const m = edges.length
  edges.sort((a, b) => {
    return value[b[0]] + value[b[1]] - value[a[0]] - value[a[1]]
  })

  const degree = Array(n).fill(0)
  for (const [u, v] of edges) {
    degree[u]++
    degree[v]++
  }

  const g = Array(n)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < m; i++) {
    const [u, v] = edges[i]
    if (degree[u] < degree[v] || (degree[u] === degree[v] && u < v)) {
      g[u].push([v, i])
    } else {
      g[v].push([u, i])
    }
  }

  const nodes = Array(m)
    .fill(0)
    .map(() => [])
  const visited = Array(n).fill(Infinity)
  const indexs = Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    for (const [v, index] of g[edges[i][0]]) {
      visited[v] = i
      indexs[v] = index
    }
    for (const [v, index] of g[edges[i][1]]) {
      if (visited[v] === i) {
        nodes[index].push(edges[i][0])
        nodes[indexs[v]].push(edges[i][1])
        nodes[i].push(v)
      }
    }
  }

  const c = Array(n)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < m; i++) {
    for (const u of nodes[i]) {
      c[u].push(i)
    }
  }

  let res = 0
  for (let i = 0; i < n; i++) {
    let bound = c[i].length - 1
    for (let a = 0; a < Math.min(3, c[i].length) && a <= bound; a++) {
      for (let b = a; b <= bound; b++) {
        const cb = c[i][b]
        const ca = c[i][a]
        let cur = value[i] + value[edges[ca][0]] + value[edges[ca][1]]
        let count = 0
        // i -> ca[0] -> ca[1] -> i -> cb[0] -> cb[1]
        if (edges[cb][0] !== edges[ca][0] && edges[cb][0] !== edges[ca][1]) {
          cur += value[edges[cb][0]]
          count++
        }
        if (edges[cb][1] !== edges[ca][0] && edges[cb][1] !== edges[ca][1]) {
          cur += value[edges[cb][1]]
          count++
        }
        res = Math.max(res, cur)
        if (count === 2) {
          bound = b - 1
          break
        }
      }
    }
  }
  return res
}
