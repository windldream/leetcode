/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function (points, k) {
  const len = points.length
  const queue = []
  let ans = -Infinity
  for (let i = 0; i < len; i++) {
    while (queue.length && points[i][0] - queue[0][0] > k) {
      queue.shift()
    }
    if (queue.length) {
      ans = Math.max(ans, points[i][0] + points[i][1] - queue[0][1])
    }
    const val = points[i][0] - points[i][1]
    while (queue.length && queue[queue.length - 1][1] > val) {
      queue.pop()
    }
    queue.push([points[i][0], val])
  }
  return ans
}

findMaxValueOfEquation(
  [
    [1, 3],
    [2, 0],
    [5, 10],
    [6, -10]
  ],
  1
)
