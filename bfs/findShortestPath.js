/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function gridMaster() {
 *
 *     @param {gridMaster} master
 *     @return {boolean}
 *     this.canMove = function(direction) {
 *         ...
 *     };
 *     @return {void}
 *     this.move = function(direction) {
 *         ...
 *     };
 *     @return {boolean}
 *     this.isTarget = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {gridMaster} master
 * @return {integer}
 */
var findShortestPath = function (master) {
  const dirs = [
    ['U', 'D', -1, 0],
    ['D', 'U', 1, 0],
    ['L', 'R', 0, -1],
    ['R', 'L', 0, 1]
  ]
  const grid = Array(1002)
    .fill(0)
    .map(() => Array(1002).fill(0))
  const visited = new Set()
  grid[501][501] = -1
  let canVisited = false
  visited.add(501 + '&' + 501)
  dfs(visited, 501, 501, grid)
  if (!canVisited) return -1

  let dis = 0
  let queue = []
  queue.push([501, 501])
  const set = new Set()
  set.add(501 + '&' + 501)
  while (queue.length) {
    const temp = []
    for (let i = 0; i < queue.length; i++) {
      const [x, y] = queue[i]
      if (grid[x][y] === 2) return dis
      for (const [d1, d2, dx, dy] of dirs) {
        const r = dx + x
        const c = dy + y
        if (r >= 0 && r < 1002 && c >= 0 && c < 1002 && !set.has(r + '&' + c) && grid[r][c] !== 0) {
          temp.push([r, c])
          set.add(r + '&' + c)
        }
      }
    }
    queue = temp
    dis++
  }

  return dis

  function dfs(visited, x, y, grid) {
    grid[x][y] = 1
    if (master.isTarget()) {
      grid[x][y] = 2
      canVisited = true
    }
    for (const [d1, d2, dx, dy] of dirs) {
      const r = x + dx
      const c = y + dy
      const key = r + '&' + c
      if (!visited.has(key) && master.canMove(d1)) {
        visited.add(key)
        master.move(d1)
        dfs(visited, r, c, grid)
        master.move(d2)
      }
    }
    return false
  }
}
