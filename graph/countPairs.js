/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function (n, edges, queries) {
  const degree = Array(n + 1).fill(0)
  const count = new Map()
  for (let [u, v] of edges) {
    degree[u] += 1
    degree[v] += 1
    if (u > v) {
      const temp = u
      u = v
      v = temp
    }
    count.set(u + '&' + v, (count.get(u + '&' + v) || 0) + 1)
  }

  const sortDegree = degree.slice(1).sort((a, b) => a - b)

  const m = queries.length
  const ans = Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    let l = 0
    let r = n - 1
    let cnt = 0
    while (l < n) {
      while (l < r && sortDegree[l] + sortDegree[r] > queries[i]) {
        r--
      }
      cnt += n - Math.max(l, r) - 1
      l++
    }

    for (const [str, num] of count) {
      const [x, y] = str.split('&')
      const sum = degree[x] + degree[y]
      if (sum > queries[i] && sum - num <= queries[i]) {
        cnt--
      }
    }
    ans[i] = cnt
  }

  return ans
}

countPairs(
  4,
  [
    [1, 2],
    [2, 4],
    [1, 3],
    [2, 3],
    [2, 1]
  ],
  [2, 3]
)
