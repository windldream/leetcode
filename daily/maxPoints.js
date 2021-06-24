/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let ans = 0
  const n = points.length
  if (n === 1) return 1

  for (let i = 0; i < n; i++) {
    const map = new Map()
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const gradient = (points[i][1] - points[j][1]) / (points[i][0] - points[j][0])
        if (map.has(gradient)) {
          map.set(gradient, map.get(gradient) + 1)
        } else {
          map.set(gradient, 2)
        }
      }
    }
    for (const [gradient, cnt] of map) {
      ans = Math.max(ans, cnt)
    }
  }
  return ans
}
