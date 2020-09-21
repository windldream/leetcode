/**
 * @param {number[][]} points
 * @return {number[][]}
 */
var outerTrees = function (points) {
  if (points.length < 4) return points

  const hull = new Set()
  let leftMost = 0
  // 寻找最左边的点
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] < points[leftMost][0]) {
      leftMost = i
    }
  }
  let p = leftMost
  do {
    let q = (p + 1) % points.length
    for (let i = 0; i < points.length; i++) {
      if (orientation(points[p], points[q], points[i]) < 0) {
        q = i
      }
    }

    for (let i = 0; i < points.length; i++) {
      if (
        p !== i &&
        q !== i &&
        orientation(points[p], points[i], points[q]) === 0 &&
        inBetween(points[p], points[i], points[q])
      ) {
        hull.add(points[i])
      }
    }
    hull.add(points[q])
    p = q
  } while (p !== leftMost)
  return [...hull]

  function orientation(p, q, r) {
    return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1])
  }

  function inBetween(p, i, q) {
    const a = (i[0] >= p[0] && i[0] <= q[0]) || (i[0] <= p[0] && i[0] >= q[0])
    const b = (i[1] >= p[1] && i[1] <= q[1]) || (i[1] <= p[1] && i[1] >= q[1])
    return a && b
  }
}
