/**
 * @param {number[][]} points
 * @param {string} direction
 * @return {number[]}
 */
var visitOrder = function (points, direction) {
  const n = points.length
  const used = Array(n).fill(false)
  const order = []

  let start = 0
  for (let i = 1; i < n; i++) {
    if (points[i][0] < points[start][0]) {
      start = i
    }
  }
  used[start] = true
  order.push(start)

  for (let i = 0; i < direction.length; i++) {
    let next = -1
    for (let j = 0; j < n; j++) {
      if (!used[j]) {
        if (direction[i] === 'L') {
          if (next === -1 || cross(sub(points[next], points[start]), sub(points[j], points[start])) < 0) {
            next = j
          }
        } else if (direction[i] === 'R') {
          if (next === -1 || cross(sub(points[next], points[start]), sub(points[j], points[start])) > 0) {
            next = j
          }
        }
      }
    }
    used[next] = true
    order.push(next)
    start = next
  }

  for (let i = 0; i < n; i++) {
    if (!used[i]) order.push(i)
  }
  return order

  function sub(a, b) {
    return [a[0] - b[0], a[1] - b[1]]
  }

  function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0]
  }
}
