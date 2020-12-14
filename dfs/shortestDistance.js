/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
var shortestDistance = function (maze, start, destination) {
  const n = maze.length
  const m = maze[0].length
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  const dis = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Infinity))
  const queue = []
  queue.push(start)
  dis[start[0]][start[1]] = 0
  while (queue.length) {
    const [i, j] = queue.shift()
    for (const [dx, dy] of dirs) {
      let x = i + dx
      let y = j + dy
      let step = dis[i][j]
      while (x >= 0 && x < n && y >= 0 && y < m && maze[x][y] === 0) {
        x += dx
        y += dy
        step += 1
      }

      x -= dx
      y -= dy
      if (dis[x][y] > step) {
        dis[x][y] = step
        queue.push([x, y])
      }
    }
  }

  return dis[destination[0]][destination[1]] === Infinity ? -1 : dis[destination[0]][destination[1]]
}

shortestDistance(
  [
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]
  ],
  [0, 4],
  [4, 4]
)
