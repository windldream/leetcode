/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// 5, 10, -5
var asteroidCollision = function (asteroids) {
  let i = 0,
    len = asteroids.length,
    stack = [];

  while (i < len) {
    if (asteroids[i] < 0) {
      if (stack.length === 0) {
        stack.push(asteroids[i]);
      } else {
        while (stack.length) {
          let asteroid = stack.pop();
          if (asteroid < 0) {
            stack.push(asteroid);
            stack.push(asteroids[i]);
            break;
          }
          if (Math.abs(asteroid) > Math.abs(asteroids[i])) {
            stack.push(asteroid);
            break;
          } else if (Math.abs(asteroid) === Math.abs(asteroids[i])) {
            break;
          } else {
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
              stack.push(asteroids[i]);
              break;
            }
          }
        }
      }
    } else {
      stack.push(asteroids[i]);
    }
    i++;
  }

  return stack;
};

console.log(asteroidCollision([-2, -2, 1, -2]))