/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const len = points.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (k !== i && k !== j) {
          if (check(points[i][0], points[i][1], points[j][0], points[j][1], points[k][0], points[k][1])) {
            sum++
          }
        }
      }
    }
  }
  return sum

  function check(x1, y1, x2, y2, x3, y3) {
    return (
      Math.abs((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) ===
      Math.abs((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3))
    )
  }
}
