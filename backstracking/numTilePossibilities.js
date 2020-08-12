/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const res = new Set()
  const track = []
  const visited = Array(tiles.length).fill(0)
  backtrack(0, visited)
  return res.size

  function backtrack(index, visited) {
    if (index > tiles.length) return
    if (track.length) res.add(track.join(''))
    for (let i = 0; i < tiles.length; i++) {
      if (visited[i]) continue
      track.push(tiles[i])
      visited[i] = 1
      backtrack(index + 1, visited)
      track.pop()
      visited[i] = 0
    }
  }
}
