/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
const minimumCost = function(N, connections) {
  const uf = Array(N + 1).fill(0).map((val, index) => index)
  connections.sort((a, b) => a[2] - b[2])
  let connects = N
  let ans = 0
  for (const [city1, city2, cost] of connections) {
    const u = find(city1)
    const v = find(city2)
    if (u === v) continue
    connects -= 1
    ans += cost
    union(u, v)
    if (connects === 1) return ans
  }
  return -1

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