/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const n = rooms.length
  const visited = Array(n).fill(false)
  const queue = [0]
  visited[0] = true
  let num = 0

  while (queue.length) {
    const u = queue.shift()
    num++

    for (const v of rooms[u]) {
      if (!visited[v]) {
        visited[v] = true
        queue.push(v)
      }
    }
  }

  return num === n
}
