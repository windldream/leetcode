/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
  const len = board.length,
    M = 10 ** 9 + 7,
    dp = Array(len + 1)
      .fill(0)
      .map(() => Array(len + 1).fill(0)),
    path = Array(len + 1)
      .fill(0)
      .map(() => Array(len + 1).fill(0)),
    zero = '0'.charCodeAt();

  path[len - 1][len - 1] = 1;
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= 0; j--) {
      if (
        board[i][j] !== 'X' &&
        (path[i + 1][j] !== 0 ||
          path[i][j + 1] !== 0 ||
          path[i + 1][j + 1] !== 0)
      ) {
        const maxScore = Math.max(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
        dp[i][j] = maxScore + board[i][j].charCodeAt() - zero;
        if (dp[i + 1][j] === maxScore) {
          path[i][j] = (path[i][j] + path[i + 1][j]) % M;
        }
        if (dp[i][j + 1] === maxScore) {
          path[i][j] = (path[i][j] + path[i][j + 1]) % M;
        }
        if (dp[i + 1][j + 1] === maxScore) {
          path[i][j] = (path[i][j] + path[i + 1][j + 1]) % M;
        }
      }
    }
  }

  let maxScore = dp[0][0] == 0 ? 0 : dp[0][0] - ('E'.charCodeAt() - zero);
  return [maxScore, path[0][0]];
};

console.log(pathsWithMaxScore(['E23', '2X2', '12S']));
