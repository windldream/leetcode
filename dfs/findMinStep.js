/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function(board, hand) {
  const hashColor = {
    R: 0,
    Y: 0,
    B: 0,
    G: 0,
    W: 0
  };
  for (let color of hand) {
    hashColor[color] += 1;
  }

  return dfs(board, hashColor);

  // 搜索 + 回溯
  function dfs(board, hashColor) {
    if (board.length === 0) {
      return 0;
    }
    let res = Infinity,
      i = 0;
    while (i < board.length) {
      let j = i + 1;
      while (j < board.length && board[i] === board[j]) {
        j += 1;
      }
      let need = 3 - (j - i);
      if (hashColor[board[i]] >= need) {
        need = Math.max(0, need);
        hashColor[board[i]] -= need;
        let tmp = dfs(board.substring(0, i) + board.substring(j), hashColor);
        if (tmp >= 0) {
          res = Math.min(res, need + tmp);
        }
        // 回溯
        hashColor[board[i]] += need;
      }
      i = j;
    }

    return res === Infinity ? -1 : res;
  }
};
