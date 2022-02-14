/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  let l = 0
  let r = grid[0].length - 1
  let suml = 0
  let sumr = 0

  while (l < r) {
    if (suml + grid[1][l] < sumr + grid[0][r]) {
      suml += grid[1][l]
      l++
    } else {
      sumr += grid[0][r]
      r--
    }
  }

  return Math.max(suml, sumr)
}
