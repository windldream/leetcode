/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
  const [x1, y1] = start1
  const [x2, y2] = end1
  const [x3, y3] = start2
  const [x4, y4] = end2
  const ans = []
  if ((y4 - y3) * (x2 - x1) === (y2 - y1) * (x4 - x3)) {
    if ((y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1)) {
      if (inside(x1, y1, x2, y2, x3, y3)) {
        update(ans, x3, y3)
      }
      if (inside(x1, y1, x2, y2, x4, y4)) {
        update(ans, x4, y4)
      }
      if (inside(x3, y3, x4, y4, x1, y1)) {
        update(ans, x1, y1)
      }
      if (inside(x3, y3, x4, y4, y2, y2)) {
        update(ans, x2, y2)
      }
    }
  } else {
    const t1 =
      (x3 * (y4 - y3) + y1 * (x4 - x3) - y3 * (x4 - x3) - x1 * (y4 - y3)) /
      ((x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1))

    const t2 =
      (x1 * (y2 - y1) + y3 * (x2 - x1) - y1 * (x2 - x1) - x3 * (y2 - y1)) /
      ((x4 - x3) * (y2 - y1) - (x2 - x1) * (y4 - y3))

    if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
      ans[0] = x1 + t1 * (x2 - x1)
      ans[1] = y1 + t1 * (y2 - y1)
    }
  }

  return ans

  function inside(x1, y1, x2, y2, xk, yk) {
    return (
      (x1 === x2 || (Math.min(x1, x2) <= xk && xk <= Math.max(x1, x2))) &&
      (y1 === y2 || (Math.min(y1, y2) <= yk && yk <= Math.max(y1, y2)))
    )
  }

  function update(ans, xk, yk) {
    if (ans.length === 0 || xk < ans[0] || (xk === ans[0] && yk < ans[1])) {
      ans[0] = xk
      ans[1] = yk
    }
  }
}

intersection([1, 0], [1, 1], [-1, 0], [3, 2])
