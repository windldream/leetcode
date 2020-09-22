/**
 * @param {number[][]} points
 * @param {number} r
 * @return {number}
 */
var numPoints = function (points, r) {
  const len = points.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) {
        let count = 0
        for (let k = 0; k < len; k++) {
          if (getDis(points[i][0], points[i][1], points[k][0], points[k][1]) <= r) {
            count++
          }
        }
        ans = Math.max(ans, count)
      } else {
        const dis = getDis(points[i][0], points[i][1], points[i][0], points[i][1])
        if (dis / 2 > r) continue
        const res = calculateCenter(points[i], points[j], r)
        let count = 0
        for (let k = 0; k < len; k++) {
          if (getDis(res[0], res[1], points[k][0], points[k][1]) <= r) {
            count++
          }
        }
        ans = Math.max(ans, count)
      }
    }
  }

  return ans

  function getDis(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }

  function calculateCenter(a, b, r) {
    const midX = (a[0] + b[0]) / 2
    const midY = (a[1] + b[1]) / 2
    const dis = getDis(a[0], a[1], midX, midY)
    const h = Math.sqrt(r * r - dis * dis)
    const verticalX = b[0] - a[0]
    const verticalY = b[1] - a[1]
    const hd = [-verticalY, verticalX]
    const len = Math.sqrt(hd[0] ** 2 + hd[1] ** 2)
    hd[0] = hd[0] / len
    hd[1] = hd[1] / len
    hd[0] = hd[0] * h
    hd[1] = hd[1] * h
    return [hd[0] + midX, hd[1] + midY]
  }
}
