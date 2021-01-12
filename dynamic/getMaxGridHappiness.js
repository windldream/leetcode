/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
const getMaxGridHappiness = function (m, n, introvertsCount, extrovertsCount) {
  const status = 3 ** n
  const maskSpan = Array(status)
    .fill(0)
    .map(() => Array(6).fill(0))
  const dp = Array(status)
    .fill(0)
    .map(() =>
      Array(6)
        .fill(0)
        .map(() =>
          Array(7)
            .fill(0)
            .map(() => Array(7).fill(-1))
        )
    )
  const nxInner = Array(status).fill(0)
  const wxInner = Array(status).fill(0)
  const scoreInner = Array(status).fill(0)
  const scoreOuter = Array(status)
    .fill(0)
    .map(() => Array(status).fill(0))
  for (let mask = 0; mask < status; mask++) {
    for (let maskTmp = mask, i = 0; i < n; i++) {
      maskSpan[mask][i] = maskTmp % 3
      maskTmp = Math.trunc(maskTmp / 3)
    }
    nxInner[mask] = wxInner[mask] = scoreInner[mask] = 0
    for (let i = 0; i < n; i++) {
      if (maskSpan[mask][i] !== 0) {
        if (maskSpan[mask][i] === 1) {
          nxInner[mask] += 1
          scoreInner[mask] += 120
        } else if (maskSpan[mask][i] === 2) {
          wxInner[mask] += 1
          scoreInner[mask] += 40
        }

        if (i - 1 >= 0) {
          scoreInner[mask] += calc(maskSpan[mask][i], maskSpan[mask][i - 1])
        }
      }
    }
  }

  for (let mask0 = 0; mask0 < status; mask0++) {
    for (let mask1 = 0; mask1 < status; mask1++) {
      scoreOuter[mask0][mask1] = 0
      for (let i = 0; i < n; i++) {
        scoreOuter[mask0][mask1] += calc(maskSpan[mask0][i], maskSpan[mask1][i])
      }
    }
  }

  return dfs(0, 0, introvertsCount, extrovertsCount)

  function dfs(maskLast, row, nx, wx) {
    if (row === m || nx + wx === 0) return 0

    if (dp[maskLast][row][nx][wx] != -1) return dp[maskLast][row][nx][wx]

    let best = 0
    for (let mask = 0; mask < status; mask++) {
      if (nxInner[mask] > nx || wxInner[mask] > wx) continue
      const score = scoreInner[mask] + scoreOuter[mask][maskLast]
      best = Math.max(best, score + dfs(mask, row + 1, nx - nxInner[mask], wx - wxInner[mask]))
    }

    return (dp[maskLast][row][nx][wx] = best)
  }

  function calc(x, y) {
    if (x === 0 || y === 0) return 0
    if (x === 1 && y === 1) return -60
    if (x === 2 && y === 2) return 40
    return -10
  }
}
