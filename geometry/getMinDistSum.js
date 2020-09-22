/**
 * @param {number[][]} positions
 * @return {number}
 */
var getMinDistSum = function (positions) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ]
  const eps = 1e-7
  const len = positions.length
  let step = 1
  let x = 0
  let y = 0
  for (const pos of positions) {
    x += pos[0]
    y += pos[1]
  }
  x /= len
  y /= len

  while (step > eps) {
    let modified = false
    for (let i = 0; i < 4; i++) {
      const xNext = x + step * dirs[i][0]
      const yNext = y + step * dirs[i][1]
      if (getDis(xNext, yNext) < getDis(x, y)) {
        x = xNext
        y = yNext
        modified = true
        break
      }
    }
    if (!modified) {
      step = step / 2
    }
  }

  return getDis(x, y)

  function getDis(x, y) {
    let ans = 0
    for (const pos of positions) {
      ans += Math.sqrt((pos[0] - x) ** 2 + (pos[1] - y) ** 2)
    }
    return ans
  }
}
