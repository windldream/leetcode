/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  const dx = [0, -1, 0, 1]
  const dy = [1, 0, -1, 0]
  let x = 0
  let y = 0
  let state = 0

  while (true) {
    for (const c of instructions) {
      if (c === 'G') {
        x += dx[state % 4]
        y += dy[state % 4]
      } else if (c === 'L') {
        state++
      } else {
        state--
        if (state < 0) {
          state += 4
        }
      }
    }
    if (state % 4 === 0) break
  }

  return x === 0 && y === 0
}

isRobotBounded('RLLGLRRRRGGRRRGLLRRR')
