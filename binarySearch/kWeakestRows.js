/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const m = mat.length
  const n = mat[0].length

  const res = []
  for (let i = 0; i < m; i++) {
    let lo = 0
    let hi = n
    while (lo < hi) {
      const mid = lo + ((hi - lo) >> 1)
      if (mat[i][mid] === 0) {
        hi = mid
      } else {
        lo = mid + 1
      }
    }
    res.push([i, lo - 1])
  }

  res.sort((a, b) => {
    if (a[1] - b[1] === 0) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  return res.slice(0, k).map((val) => val[0])
}
