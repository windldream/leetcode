/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isConvex = function(points) {
  const len = points.length
  let pre = 0
  for (let i = 0; i < len; i++) {
    const x1 = points[(i + 1) % len][0] - points[i][0]
    const x2 = points[(i + 2) % len][0] - points[i][0]
    const y1 = points[(i + 1) % len][1] - points[i][1]
    const y2 = points[(i + 2) % len][1] - points[i][1]
    const cur = x1 * y2 - x2 * y1
    if (cur !== 0) {
      if (cur * pre < 0) return false
      pre = cur
    }
  }
  return true
};