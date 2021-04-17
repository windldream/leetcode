/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const ans = []
  for (const [x1, y1, r] of queries) {
    let count = 0
    for (const [x2, y2] of points) {
      const dis = (x1 - x2) ** 2 + (y1 - y2) ** 2
      if (dis <= r ** 2) count++
    }
    ans.push(count)
  }
  return ans
}
