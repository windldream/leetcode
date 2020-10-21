/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0
  let y = 0
  for (const c of moves) {
    switch (c) {
      case 'R':
        x++
        break
      case 'L':
        x--
        break
      case 'U':
        y--
        break
      default:
        y++
        break
    }
  }

  return x === 0 && y === 0
}
