/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const len = points.length
  const visited = new Set()
  const minDist = Array(len).fill(Infinity)
  let ans = 0
  minDist[0] = 0
  for (let i = 0; i < len; i++) {
    let u = -1
    let min = Infinity
    for (let j = 0; j < len; j++) {
      if (!visited.has(j) && minDist[j] <= min) {
        min = minDist[j]
        u = j
      }
    }
    ans += min
    visited.add(u)
    for (let j = 0; j < len; j++) {
      if (!visited.has(j)) {
        const dist = Math.abs(points[j][0] - points[u][0]) + Math.abs(points[j][1] - points[u][1])
        minDist[j] = Math.min(minDist[j], dist)
      }
    }
  }
  return ans
}
