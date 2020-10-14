/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function (stoneValue) {
  const len = stoneValue.length
  const s = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  const g = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  const f = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  const mxl = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))
  const mxr = Array(len + 1)
    .fill(0)
    .map(() => Array(len + 1).fill(0))

  for (let i = 0; i < len; i++) {
    s[i][i] = stoneValue[i]
    g[i][i] = i
    for (let j = i + 1; j < len; j++) {
      s[i][j] = s[i][j - 1] + stoneValue[j]
      let pos = g[i][j - 1]
      while (s[i][j] - s[i][pos] > s[i][pos]) {
        pos++
      }
      g[i][j] = pos
    }
  }

  for (let i = 1; i <= len; i++) {
    for (let l = 0; l + i - 1 < len; l++) {
      const r = l + i - 1
      const pos = g[l][r]
      const ls = s[l][pos]
      const rs = s[pos + 1][r]
      if (ls === rs) {
        f[l][r] = Math.max(f[l][r], mxl[l][pos], mxr[pos + 1][r])
      } else {
        if (pos > l) {
          f[l][r] = Math.max(f[l][r], mxl[l][pos - 1])
        }
        if (pos < r) {
          f[l][r] = Math.max(f[l][r], mxr[pos + 1][r])
        }
      }
      const val = f[l][r] + s[l][r]
      if (l === r) {
        mxl[l][r] = val
        mxr[l][r] = val
      } else {
        mxl[l][r] = Math.max(val, mxl[l][r - 1])
        mxr[l][r] = Math.max(val, mxr[l + 1][r])
      }
    }
  }

  return f[0][len - 1]
}

stoneGameV([98, 77, 24, 49, 6, 12, 2, 44, 51, 96])
