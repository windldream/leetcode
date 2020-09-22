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
      let count = 0
      let center
      if (i === j) {
        center = points[i]
      } else {
        const dis = getDis(points[i][0], points[i][1], points[i][0], points[i][1])
        if (dis / 2 > r) continue
        center = calculateCenter(points[i], points[j], r)
      }
      for (let k = 0; k < len; k++) {
        if (getDis(center[0], center[1], points[k][0], points[k][1]) <= r) {
          count++
        }
      }
      ans = Math.max(ans, count)
    }
  }

  return ans

  function getDis(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
  }

  function calculateCenter(a, b, r) {
    // 计算a,b中点坐标
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
    // 计算a到ab中点的距离
    const dis = getDis(a[0], a[1], mid[0], mid[1])
    // 垂线距离
    const h = Math.sqrt(r * r - dis * dis)
    // 向量ab
    const vertical = [b[0] - a[0], b[1] - a[1]]
    // 向量ab的垂线
    const hd = [-vertical[1], vertical[0]]
    // 向量ab垂线的长度
    const len = Math.sqrt(hd[0] ** 2 + hd[1] ** 2)
    hd[0] = (hd[0] / len) * h
    hd[1] = (hd[1] / len) * h
    return [hd[0] + mid[0], hd[1] + mid[1]]
  }
}
