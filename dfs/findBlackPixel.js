/**
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
var findBlackPixel = function (picture, N) {
  const n = picture.length
  const m = picture[0].length
  const row = Array(n).fill(0)
  const col = Array(m).fill(0)
  const colsBlack = Array(m)
    .fill(0)
    .map(() => [])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (picture[i][j] === 'B') {
        row[i]++
        col[j]++
        colsBlack[j].push(i)
      }
    }
  }

  const validRows = []
  const validCols = []
  for (let i = 0; i < n; i++) {
    if (row[i] === N) validRows.push(i)
  }
  for (let i = 0; i < m; i++) {
    if (col[i] === N) validCols.push(i)
  }

  let res = 0
  for (const i of validRows) {
    inner: for (const j of validCols) {
      for (const k of colsBlack[j]) {
        if (picture[i].join('&') !== picture[k].join('&')) continue inner
      }
      res++
    }
  }
  return res
}
