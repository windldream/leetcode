/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
  const set = new Set()
  let area = Infinity
  for (const [x1, y1] of points) {
    for (const item of set) {
      const [x2, y2] = item.split('$')
      if (set.has(x1 + '$' + y2) && set.has(x2 + '$' + y1)) {
        area = Math.min(area, Math.abs(x2 - x1) * Math.abs(y2 - y1))
      }
    }
    set.add(x1 + '$' + y1)
  }
  return area === Infinity ? 0 : area
}
