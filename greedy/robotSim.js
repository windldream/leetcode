/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  const dx = [0, 1, 0, -1],
    dy = [1, 0, -1, 0],
    set = new Set();
  let x = 0,
    y = 0,
    dir = 0,
    res = 0;

  for (let obs of obstacles) {
    set.add(obs[0] + '&' + obs[1]);
  }

  for (let cmd of commands) {
    if (cmd === -2) {
      dir = (dir + 3) % 4;
    } else if (cmd === -1) {
      dir = (dir + 1) % 4;
    } else {
      for (let k = 0; k < cmd; k++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        if (!set.has(nx + '&' + ny)) {
          x = nx;
          y = ny;
          res = Math.max(res, x * x + y * y);
        } else {
          break;
        }
      }
    }
  }

  return res;
};

console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]));
