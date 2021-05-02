/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  rooms.sort((a, b) => a[1] - b[1])

  const ans = []
  for (const [preferred, minSize] of queries) {
    ans.push(find(rooms, preferred, minSize))
  }
  return ans

  function find(rooms, id, minSize) {
    let l = 0
    let r = rooms.length - 1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (rooms[mid][1] < minSize) {
        l = mid + 1
      } else {
        break
      }
    }

    let ans = -1
    let diifId = Infinity
    for (let i = l; i <= r; i++) {
      const [roomId, roomSize] = rooms[i]
      if (roomSize >= minSize) {
        if (Math.abs(roomId - id) < diifId) {
          diifId = Math.abs(roomId - id)
          ans = roomId
        } else if (Math.abs(roomId - id) === diifId) {
          ans = Math.min(ans, roomId)
        }
      }
    }

    return ans
  }
}
