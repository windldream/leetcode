/**
 * Initialize your data structure here.
 * @param {number} n
 */
const TicTacToe = function(n) {
  this.board = Array(n).fill(0).map(() => Array(n).fill(''))
};

/**
 * Player {player} makes a move at ({row}, {col}).
 @param row The row of the board.
 @param col The column of the board.
 @param player The player, can be either 1 or 2.
 @return The current winning condition, can be either:
 0: No one wins.
 1: Player 1 wins.
 2: Player 2 wins.
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
  const piece = player === 1 ? 'X' : 'O'
  const board = this.board
  board[row][col] = piece
  const len = board.length

  let isWin = true
  for (let i = 0; i < len; i++) {
    if (board[i][col] !== piece) {
      isWin = false
      break
    }
  }
  if (isWin) return player

  isWin = true
  for (let j = 0; j < len; j++) {
    if (board[row][j] !== piece) {
      isWin = false
      break
    }
  }
  if (isWin) return player

  if (row === col) {
    isWin = true
    for (let i = 0; i < len; i++) {
      if (board[i][i] !== piece) {
        isWin = false
        break
      }
    }
    if (isWin) return player
  }

  if (row + col === len - 1) {
    isWin = true
    for (let i = 0; i < len; i++) {
      if (board[i][len - 1 - i] !== piece) {
        isWin = false
        break
      }
    }
    if (isWin) return player
  }

  return 0
};

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */