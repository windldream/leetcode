/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  const len = points.length
  if (len < 2) return 0

  let step = 0
  for (let i = 0; i < points.length - 1; i++) {
    step += Math.max(Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1]))
  }
  return step
}
