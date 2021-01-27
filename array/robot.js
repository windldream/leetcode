/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
  const set = new Set()
  let minx = x
  let miny = y
  for (const [u, v] of obstacles) {
    set.add(u + '&' + v)
    minx = Math.min(minx, u)
    miny = Math.min(miny, v)
  }
  let x1 = 0
  let y1 = 0
  for (const c of command) {
    if (c === 'U') {
      y1++
    } else {
      x1++
    }
    if (x1 === x && y1 === y) return true
    if (set.has(x1 + '&' + y1)) return false
    if (x1 > x || y1 > y) return false
  }

  if (minx > x1 && miny > y1) {
    const num = Math.min(Math.trunc(minx / x1), Math.trunc(miny / y1))
    x1 *= num
    y1 *= num
  }

  while (true) {
    for (const c of command) {
      if (c === 'U') {
        y1++
      } else {
        x1++
      }
      if (x1 === x && y1 === y) return true
      if (set.has(x1 + '&' + y1)) return false
      if (x1 > x || y1 > y) return false
    }
  }
}

robot('URR', [[4, 2]], 3, 2)
