/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function (grid) {
  const m = grid.length
  for (const list of grid) {
    list.mostRight = list.lastIndexOf(1)
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    if (grid[i].mostRight <= i) continue
    let min = i
    for (let j = i + 1; j < m; j++) {
      if (grid[j].mostRight <= i) {
        min = j
        break
      }
    }
    if (min === i) return -1
    for (let j = min; j > i; j--) {
      ;[grid[j], grid[j - 1]] = [grid[j - 1], grid[j]]
    }
    ans += min - i
  }
  return ans
}

minSwaps([
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1]
])
