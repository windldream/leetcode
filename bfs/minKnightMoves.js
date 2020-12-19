/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const minKnightMoves = function(x, y) {
  const dirs = [[-1, 2], [-1, -2], [1, 2], [1, -2], [-2, -1], [-2, 1], [2, -1], [2, 1]]
  const visited = new Set()
  const queue = []
  queue.push([0, 0])
  visited.add(0 + '&' + 0)
  let ans = 0
  while (queue.length) {
    const len = queue.length
    for (let k = 0; k < len; k++) {
      const [i, j] = queue.shift()
      if (i === x && j === y) return ans
      for (const [dx, dy] of dirs) {
        const row = i + dx
        const col = j + dy
        if (visited.has(row + '&' + col)) continue
        queue.push([row, col])
        visited.add(row + '&' + col)
      }
    }
    ans++
  }
};