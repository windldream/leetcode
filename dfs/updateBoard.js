/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
  const r = board.length,
    c = board[0].length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  dfs(click[0], click[1]);
  return board;

  function dfs(x, y) {
    if (!isValid(x, y, r, c)) {
      return;
    }
    if (board[x][y] === 'E') {
      board[x][y] = 'B';
      const count = getMineNum(x, y);
      if (count === 0) {
        for (let i = 0; i < 8; i++) {
          dfs(x + dx[i], y + dy[i], r, c);
        }
      } else {
        board[x][y] = count + '';
      }
    } else if (board[x][y] === 'M') {
      board[x][y] = 'X';
    }
  }

  function getMineNum(x, y) {
    let count = 0;
    for (let i = 0; i < 8; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];
      if (!isValid(newX, newY, r, c)) {
        continue;
      }
      if (board[newX][newY] === 'M') {
        count++;
      }
    }
    return count;
  }

  function isValid(x, y, r, c) {
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return false;
    }
    return true;
  }
};
