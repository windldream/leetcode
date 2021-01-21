/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  const n = matrix.length
  if (n === 0) return []
  const m = matrix[0].length
  if (m === 0) return []

  let flag = true
  const queue = []
  queue.push([0, 0])
  const visited = new Set()
  visited.add(0 + '&' + 0)
  const dirs = [
    [0, 1],
    [1, 0]
  ]
  const ans = []
  while (queue.length) {
    const len = queue.length
    const tmp = []
    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift()
      tmp.push(matrix[row][col])
      for (const [dx, dy] of dirs) {
        const x = row + dx
        const y = col + dy
        if (x < n && y < m && !visited.has(x + '&' + y)) {
          queue.push([x, y])
          visited.add(x + '&' + y)
        }
      }
    }
    if (flag) {
      tmp.reverse()
    }
    flag = !flag
    ans.push(...tmp)
  }
  return ans
}

findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [7, 8, 9]
])
