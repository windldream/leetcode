/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function (board) {
  if (check(board)) {
    const row = board[0]
    const col = Array(board.length).fill(0)
    for (let i = 0; i < board.length; i++) {
      col[i] = board[i][0]
    }
    return find(row) + find(col)
  } else {
    return -1
  }

  function isSame(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  function isOpposite(a, b) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] + b[i] != 1) return false
    }
    return true
  }

  function check(board) {
    const first = board[0]
    let countSame = 1
    let countOpposite = 0
    for (let i = 1; i < board.length; i++) {
      if (isSame(first, board[i])) {
        countSame++
      } else if (isOpposite(first, board[i])) {
        countOpposite++
      } else {
        return false
      }
    }

    if (Math.abs(countSame - countOpposite) <= 1) {
      let count0 = 0
      let count1 = 0
      for (const i of first) {
        if (i === 0) {
          count0++
        } else {
          count1++
        }
      }
      if (Math.abs(count0 - count1) <= 1) return true
      return false
    }
    return false
  }

  function find(tmp) {
    let start = 1
    let error = 0
    for (const i of tmp) {
      if (i !== start) {
        error++
      }
      start = 1 - start
    }
    if (tmp.length % 2 === 0) {
      return Math.min(tmp.length - error, error) >> 1
    } else {
      if (error % 2 === 0) {
        return error >> 1
      }
      return (tmp.length - error) >> 1
    }
  }
}
