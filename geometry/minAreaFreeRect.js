/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function (points) {
  const len = points.length
  const pointSet = new Set()
  for (const [x, y] of points) {
    pointSet.add(x + '&' + y)
  }

  let ans = Infinity
  for (let i = 0; i < len; i++) {
    const p1 = points[i]
    for (let j = 0; j < len; j++) {
      if (j === i) continue
      const p2 = points[j]
      for (let k = j + 1; k < len; k++) {
        if (k === i) continue
        const p3 = points[k]
        const key = p2[0] + p3[0] - p1[0] + '&' + (p2[1] + p3[1] - p1[1])
        // 判断是否是平行四边形
        if (pointSet.has(key)) {
          // 判断矩形是否正交
          const isOrthogonal = (p2[0] - p1[0]) * (p3[0] - p1[0]) + (p2[1] - p1[1]) * (p3[1] - p1[1]) === 0
          if (isOrthogonal) {
            const area = getArea(p1, p2, p3)
            if (area < ans) {
              ans = area
            }
          }
        }
      }
    }
  }

  return ans === Infinity ? 0 : ans

  function getArea(p1, p2, p3) {
    const a = Math.sqrt(Math.abs(p2[0] - p1[0]) ** 2 + Math.abs(p2[1] - p1[1]) ** 2)
    const b = Math.sqrt(Math.abs(p3[0] - p1[0]) ** 2 + Math.abs(p3[1] - p1[1]) ** 2)
    return a * b
  }
}
