/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
  rooms.sort((a, b) => a[1] - b[1])

  const n = rooms.length
  const ans = []

  for (const [perferred, minSize] of queries) {
    let l = 0
    let r = n - 1
    let idx = -1

    while (l <= r) {
      const mid = (l + r) >> 1

      if (rooms[mid][1] >= minSize) {
        idx = mid
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    if (idx === -1) {
      ans.push(idx)
      continue
    }

    let diff = Infinity
    let id = -1

    for (let i = idx; i < n; i++) {
      const roomId = rooms[i][0]
      const val = Math.abs(roomId - perferred)

      if (val < diff) {
        diff = val
        id = roomId
      } else if (val === diff) {
        id = Math.min(id, roomId)
      }
    }

    ans.push(id)
  }

  return ans
}
