class Position {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
/**
 * @param {number} K
 * @return {string[]}
 */
var printKMoves = function (K) {
  const direction = ['L', 'U', 'R', 'D']
  const offset = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1]
  ]
  const antPos = new Position(0, 0)
  let antDir = 2
  const blackSet = new Set()
  while (K > 0) {
    const t = antPos.x + '&' + antPos.y
    if (!blackSet.has(t)) {
      blackSet.add(t)
      antDir = (antDir + 1) % 4
    } else {
      antDir = (antDir + 3) % 4
      blackSet.delete(t)
    }
    antPos.x += offset[antDir][0]
    antPos.y += offset[antDir][1]
    K--
  }
  let left = antPos.x
  let top = antPos.y
  let right = antPos.x
  let bottom = antPos.y
  for (const pos of blackSet) {
    const [x, y] = pos.split('&')
    left = Math.min(left, x)
    top = Math.min(top, y)
    right = Math.max(right, x)
    bottom = Math.max(bottom, y)
  }

  const grid = Array(bottom - top + 1)
    .fill(0)
    .map(() => Array(right - left + 1).fill('_'))
  for (const pos of blackSet) {
    const [x, y] = pos.split('&')
    grid[y - top][x - left] = 'X'
  }
  grid[antPos.y - top][antPos.x - left] = direction[antDir]
  return grid.map((row) => row.join(''))
}

printKMoves(8)
