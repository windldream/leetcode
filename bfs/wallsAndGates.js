/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
const wallsAndGates = function (rooms) {
  const m = rooms.length
  if (m === 0) return
  const n = rooms[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] === 0) {
        bfs(i, j, rooms, 0)
      }
    }
  }

  function bfs(i, j, rooms, dis) {
    if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < dis) return
    rooms[i][j] = dis
    bfs(i + 1, j, rooms, dis + 1)
    bfs(i - 1, j, rooms, dis + 1)
    bfs(i, j - 1, rooms, dis + 1)
    bfs(i, j + 1, rooms, dis + 1)
  }
}
