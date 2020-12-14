/**
 * @param {number[][]} maze
 * @param {number[]} ball
 * @param {number[]} hole
 * @return {string}
 */
var findShortestWay = function (maze, ball, hole) {
  const dirs = [
    [-1, 0, 'u'],
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r']
  ]
  const n = maze.length
  const m = maze[0].length
  const queue = []
  const dis = Array(n)
    .fill(0)
    .map(() => Array(m).fill(Infinity))
  const strs = Array(n)
    .fill(0)
    .map(() => Array(m).fill('impossible'))
  queue.push(ball)
  dis[ball[0]][ball[1]] = 0
  strs[ball[0]][ball[1]] = ''
  while (queue.length) {
    const [i, j] = queue.shift()
    for (const [dx, dy, c] of dirs) {
      let x = i + dx
      let y = j + dy
      let step = dis[i][j]
      let word = strs[i][j]
      while (x >= 0 && x < n && y >= 0 && y < m && maze[x][y] === 0 && (x - dx !== hole[0] || y - dy !== hole[1])) {
        x += dx
        y += dy
        step += 1
      }
      x -= dx
      y -= dy
      if (dis[x][y] > step || (dis[x][y] === step && word + c < strs[x][y])) {
        dis[x][y] = step
        strs[x][y] = word + c
        if (x !== hole[0] || y !== hole[1]) {
          queue.push([x, y])
        }
      }
    }
  }
  return strs[hole[0]][hole[1]]
}

findShortestWay(
  [
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0]
  ],
  [4, 3],
  [0, 1]
)
