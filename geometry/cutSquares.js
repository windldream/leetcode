/**
 * @param {number[]} square1
 * @param {number[]} square2
 * @return {number[]}
 */
var cutSquares = function (square1, square2) {
  // 求正方形中点坐标
  const cx1 = square1[0] + square1[2] / 2
  const cy1 = square1[1] + square1[2] / 2

  const cx2 = square2[0] + square2[2] / 2
  const cy2 = square2[1] + square2[2] / 2

  const res = []
  if (cx1 === cx2) {
    res.push([cx1, square1[1]])
    res.push([cx1, square2[1]])
    res.push([cx1, square1[1] + square1[2]])
    res.push([cx1, square2[1] + square2[2]])
  } else if (cy1 === cy2) {
    res.push([square1[0], cy1])
    res.push([square2[0], cy1])
    res.push([square1[0] + square1[2], cy1])
    res.push([square2[0] + square2[2], cy1])
  } else {
    const fy = (y) => {
      const k = (cx2 - cx1) / (cy2 - cy1)
      return k * (y - cy1) + cx1
    }
    const fx = (x) => {
      const k = (cy2 - cy1) / (cx2 - cx1)
      return k * (x - cx1) + cy1
    }

    for (const sq of [square1, square2]) {
      for (const p of [
        [fy(sq[1]), sq[1]],
        [fy(sq[1] + sq[2]), sq[1] + sq[2]],
        [sq[0], fx(sq[0])],
        [sq[0] + sq[2], fx(sq[0] + sq[2])]
      ]) {
        if (p[0] >= sq[0] && p[0] <= sq[0] + sq[2] && p[1] >= sq[1] && p[1] <= sq[1] + sq[2]) {
          res.push(p)
        }
      }
    }
  }

  res.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  return [res[0][0], res[0][1], res[res.length - 1][0], res[res.length - 1][1]]
}

cutSquares([68, 130, 64], [-230, 194, 7])
