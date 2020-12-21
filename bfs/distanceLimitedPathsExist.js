/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const distanceLimitedPathsExist = function(n, edgeList, queries) {
  edgeList.sort((a, b) => a[2] - b[2])
  const uf = Array(n).fill(0).map((val, index) => index)
  for (let i = 0; i < queries.length; i++) {
    queries[i].push(i)
  }
  queries.sort((a, b) => a[2] - b[2])

  const ans = []
  const len = edgeList.length
  let ep = 0
  for (const [u, v, limit, index] of queries) {
    while (ep < len && edgeList[ep][2] < limit) {
      const x = find(edgeList[ep][0])
      const y = find(edgeList[ep][1])
      union(x, y)
      ep++
    }
    ans[index] = find(u) === find(v)
  }

  return ans

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }

  function union(u, v) {
    uf[u] = v
  }
};