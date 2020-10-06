/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const m = seats.length
  const n = seats[0].length

  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(1 << n).fill(0))

  for (let row = 1; row <= m; row++) {
    outer: for (let state = 0; state < 1 << n; state++) {
      // 当前状态
      let bs = state.toString(2)
      if (bs.length < n) bs = '0'.repeat(n - bs.length) + bs

      for (let j = 0; j < n; j++) {
        // 坏的座位不能选
        // 同一行左右相邻的座位不能选
        if ((bs[j] == 1 && seats[row - 1][j] === '#') || (j < n - 1 && bs[j] == 1 && bs[j + 1] == 1)) {
          dp[row][state] -= 1
          continue outer
        }
      }

      inner: for (let last = 0; last < 1 << n; last++) {
        if (dp[row - 1][last] === -1) continue
        // 上一行状态
        let lbs = last.toString(2)
        if (lbs.length < n) lbs = '0'.repeat(n - lbs.length) + lbs

        for (let j = 0; j < n; j++) {
          // 如果上一行第 j 列座位有人坐
          // 那么当前行的第 j - 1 和 j + 1 列有人坐的话都不符合
          if (lbs[j] == 1 && ((j > 0 && bs[j - 1] == 1) || (j < n - 1 && bs[j + 1] == 1))) {
            continue inner
          }
        }
        // 状态转移方程
        dp[row][state] = Math.max(dp[row][state], dp[row - 1][last] + countBit(bs))
      }
    }
  }

  return Math.max.apply(null, dp[m])

  function countBit(str) {
    let ans = 0
    for (const c of str) {
      if (c == 1) ans++
    }
    return ans
  }
}

maxStudents([
  ['#', '.', '#', '#', '.', '#'],
  ['.', '#', '#', '#', '#', '.'],
  ['#', '.', '#', '#', '.', '#']
])
