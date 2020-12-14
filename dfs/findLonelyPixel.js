/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  const n = picture.length
  const m = picture[0].length
  const row = Array(n).fill(0)
  const col = Array(m).fill(0)
  for (let i = 0; i < n; i++) {
    let num = 0
    for (let j = 0; j < m; j++) {
      num += picture[i][j] === 'B'
    }
    row[i] = num
  }
  for (let i = 0; i < m; i++) {
    let num = 0
    for (let j = 0; j < n; j++) {
      num += picture[j][i] === 'B'
    }
    col[i] = num
  }

  let count = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (picture[i][j] === 'B' && row[i] === 1 && col[j] === 1) count++
    }
  }

  return count
}
