/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const arr = Array(3)
    .fill(0)
    .map(() => Array(3).fill(0))
  for (let i = 0; i < moves.length; i++) {
    const [r, c] = moves[i]
    if (i % 2 === 0) {
      arr[r][c] = 'X'
    } else {
      arr[r][c] = 'O'
    }
  }

  if (check(arr, 'X')) return 'A'
  if (check(arr, 'O')) return 'B'
  return moves.length === 9 ? 'Draw' : 'Pending'

  function check(arr, t) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] !== t) break
        if (j === 2) return true
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (arr[j][i] !== t) break
        if (j === 2) return true
      }
    }

    if (arr[0][0] === t && arr[1][1] === t && arr[2][2] === t) return true
    if (arr[0][2] === t && arr[1][1] === t && arr[2][0] === t) return true
    return false
  }
}
