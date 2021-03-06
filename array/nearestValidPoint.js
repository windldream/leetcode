/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  let ans = -1
  let dis = Infinity
  for (let i = 0; i < points.length; i++) {
    const [a, b] = points[i]
    if (a === x || y === b) {
      const d = Math.abs(a - x) + Math.abs(b - y)
      if (d < dis) {
        ans = i
        dis = d
      }
    }
  }
  return ans
}
