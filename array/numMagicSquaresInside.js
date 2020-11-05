/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = 0
  for (let i = 0; i < m; i++) {
    inner: for (let j = 0; j < n; j++) {
      if (i + 2 >= m || j + 2 >= n) continue
      const square = Array(3)
        .fill(0)
        .map(() => [])
      const set = new Set()
      for (let dx = 0; dx < 3; dx++) {
        for (let dy = 0; dy < 3; dy++) {
          const val = grid[i + dx][j + dy]
          if (set.has(val) || val > 9 || val < 1) continue inner
          set.add(val)
          square[dx][dy] = val
        }
      }
      if (check(square)) {
        ans++
      }
    }
  }
  return ans

  function check(arr) {
    const aver = 15
    const len = arr.length
    for (let i = 0; i < len; i++) {
      if (arr[i].reduce((pre, cur) => pre + cur, 0) !== aver) return false
    }

    for (let i = 0; i < len; i++) {
      let sum = 0
      for (let j = 0; j < len; j++) {
        sum += arr[j][i]
      }
      if (sum !== aver) return false
    }

    if (arr[0][0] + arr[1][1] + arr[2][2] !== aver) return false

    if (arr[0][2] + arr[1][1] + arr[2][0] !== aver) return false

    return true
  }
}

numMagicSquaresInside([
  [1, 8, 6],
  [10, 5, 0],
  [4, 2, 9]
])
