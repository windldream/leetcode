/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  const len = points.length
  let area = 0
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        const a = getLen(points[i], points[j])
        const b = getLen(points[i], points[k])
        const c = getLen(points[j], points[k])
        area = Math.max(area, getArea(a, b, c))
      }
    }
  }
  return area

  function getLen(p0, p1) {
    return Math.sqrt((p0[0] - p1[0]) ** 2 + (p0[1] - p1[1]) ** 2)
  }

  function getArea(a, b, c) {
    const p = (a + b + c) / 2
    const s = Math.sqrt(Math.max(p * (p - a) * (p - b) * (p - c), 0))
    return s
  }
}

largestTriangleArea([
  [35, -23],
  [-12, -48],
  [-34, -40],
  [21, -25],
  [-35, -44],
  [24, 1],
  [16, -9],
  [41, 4],
  [-36, -49],
  [42, -49],
  [-37, -20],
  [-35, 11],
  [-2, -36],
  [18, 21],
  [18, 8],
  [-24, 14],
  [-23, -11],
  [-8, 44],
  [-19, -3],
  [0, -10],
  [-21, -4],
  [23, 18],
  [20, 11],
  [-42, 24],
  [6, -19]
])
