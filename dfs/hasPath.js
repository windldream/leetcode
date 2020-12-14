/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function (maze, start, destination) {
  const n = maze.length
  const m = maze[0].length
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0]
  ]
  const queue = []
  queue.push(start)
  visited[start[0]][start[1]] = true
  while (queue.length) {
    const s = queue.shift()
    if (s[0] === destination[0] && s[1] === destination[1]) return true
    for (const [dx, dy] of dirs) {
      let x = s[0] + dx
      let y = s[1] + dy
      while (x >= 0 && x < n && y >= 0 && y < m && maze[x][y] === 0) {
        x += dx
        y += dy
      }
      if (!visited[x - dx][y - dy]) {
        queue.push([x - dx, y - dy])
        visited[x - dx][y - dy] = true
      }
    }
  }
  return false
}

hasPath(
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
