/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length
  const n = box[0].length
  const reveverBox = Array(n)
    .fill(0)
    .map(() => Array(m).fill(0))

  for (let c = n - 1; c >= 0; c--) {
    for (let r = 0; r < m; r++) {
      reveverBox[c][r] = box[r][c]
    }
    reveverBox[c].reverse()
  }

  for (let c = 0; c < m; c++) {
    let count = 0
    let start = 0
    let r = 0
    for (; r < n; r++) {
      if (reveverBox[r][c] === '#') count++
      else if (reveverBox[r][c] === '*') {
        for (let r1 = start; r1 < r; r1++) {
          if (r - r1 > count) reveverBox[r1][c] = '.'
          else reveverBox[r1][c] = '#'
        }
        start = r + 1
        count = 0
      }
    }
    if (r === n) {
      for (let r1 = start; r1 < r; r1++) {
        if (r - r1 > count) reveverBox[r1][c] = '.'
        else reveverBox[r1][c] = '#'
      }
    }
  }
  return reveverBox
}

rotateTheBox([
  ['#', '.', '*', '.'],
  ['#', '#', '*', '.']
])
