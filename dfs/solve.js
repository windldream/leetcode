/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0) {
    return;
  }
  const row = board.length,
    col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const isEdge = i === 0 || j === 0 || i === row - 1 || j === col - 1;
      if (isEdge && board[i][j] === 'O') {
        dfs(board, i, j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }

  function dfs(board, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i > board.length - 1 ||
      j > board[0].length - 1 ||
      board[i][j] === 'X' ||
      board[i][j] === '#'
    ) {
      return;
    }
    board[i][j] === '#';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
};
