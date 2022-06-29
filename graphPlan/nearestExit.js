/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const m = maze.length
  const n = maze[0].length
  const queue = [entrance]
  let step = 0

  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const [r, c] = queue.shift()

      if ((r === 0 || r === m - 1 || c === 0 || c === n - 1) && !(r === entrance[0] && c === entrance[1])) return step

      for (const [dr, dc] of dirs) {
        const [x, y] = [dr + r, dc + c]

        if (x >= 0 && x < m && y >= 0 && y < n && maze[x][y] === '.') {
          queue.push([x, y])
          maze[x][y] = '+'
        }
      }
    }

    step++
  }

  return -1
}
