/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function (R, C, r0, c0) {
  const dr = [0, 1, 0, -1]
  const dc = [1, 0, -1, 0]
  const ans = []
  let t = 0
  ans[t++] = [r0, c0]
  if (R * C === 1) return ans

  for (let k = 1; k < 2 * (R + C); k += 2) {
    for (let i = 0; i < 4; i++) {
      const dk = k + (i >> 1)
      for (let j = 0; j < dk; j++) {
        r0 += dr[i]
        c0 += dc[i]
        if (0 <= r0 && r0 < R && 0 <= c0 && c0 < C) {
          ans[t++] = [r0, c0]
          if (t === R * C) return ans
        }
      }
    }
  }
}
