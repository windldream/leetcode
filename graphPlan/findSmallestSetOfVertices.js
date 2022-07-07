/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const list = Array(n).fill(0)

  for (const [u, v] of edges) {
    list[v] += 1
  }

  const ans = []

  for (let i = 0; i < n; i++) {
    if (list[i] === 0) ans.push(i)
  }

  return ans
}
