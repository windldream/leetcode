/**
 * @param {number[][]} points
 * @return {number[]}
 */
var bestLine = function (points) {
  const len = points.length
  let max = 0
  let ans = []
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let count = 2
      for (let k = 0; k < len; k++) {
        if (k === i || k === j) continue
        if (
          (points[j][0] - points[i][0]) * (points[k][1] - points[j][1]) ===
          (points[j][1] - points[i][1]) * (points[k][0] - points[j][0])
        ) {
          count++
        }
      }
      if (count > max) {
        max = count
        ans = [i, j]
      }
    }
  }
  return ans
}

bestLine([
  [0, 0],
  [1, 1],
  [1, 0],
  [2, 0]
])
