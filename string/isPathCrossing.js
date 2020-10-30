/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0
  let y = 0
  const set = new Set()
  set.add(x + '&' + y)
  for (const dir of path) {
    if (dir === 'N') {
      y--
    } else if (dir === 'S') {
      y++
    } else if (dir === 'E') {
      x++
    } else {
      x--
    }
    if (set.has(x + '&' + y)) return true
    set.add(x + '&' + y)
  }
  return false
}

isPathCrossing('NES')
