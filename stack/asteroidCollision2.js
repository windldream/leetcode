/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []

  outer: for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid)
    } else {
      let val = asteroid

      while (stack.length && stack[stack.length - 1] > 0) {
        const last = stack.pop()

        if (last > Math.abs(asteroid)) {
          val = last
          break
        } else if (last === Math.abs(asteroid)) {
          continue outer
        }
      }

      stack.push(val)
    }
  }

  return stack
}
