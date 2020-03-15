/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
  const queue = [];
  const visited = new Set();
  const target = [
    [1, 2, 3],
    [4, 5, 0]
  ].toString();
  let step = 0;
  queue.push(board);
  visited.add(board.toString());

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (cur.toString() === target) {
        return step;
      }
      const nexts = getNext(cur);
      for (const next of nexts) {
        if (visited.has(next.toString())) continue;
        queue.push(next);
        visited.add(next.toString());
      }
    }
    step += 1;
  }

  return -1;

  function getNext(cur) {
    const nexts = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        if (cur[i][j] === 0) {
          if (i - 1 >= 0) {
            cur[i][j] = cur[i - 1][j];
            cur[i - 1][j] = 0;
            nexts.push(JSON.parse(JSON.stringify(cur)));
            cur[i - 1][j] = cur[i][j];
            cur[i][j] = 0;
          }
          if (i + 1 < 2) {
            cur[i][j] = cur[i + 1][j];
            cur[i + 1][j] = 0;
            nexts.push(JSON.parse(JSON.stringify(cur)));
            cur[i + 1][j] = cur[i][j];
            cur[i][j] = 0;
          }
          if (j - 1 >= 0) {
            cur[i][j] = cur[i][j - 1];
            cur[i][j - 1] = 0;
            nexts.push(JSON.parse(JSON.stringify(cur)));
            cur[i][j - 1] = cur[i][j];
            cur[i][j] = 0;
          }
          if (j + 1 < 3) {
            cur[i][j] = cur[i][j + 1];
            cur[i][j + 1] = 0;
            nexts.push(JSON.parse(JSON.stringify(cur)));
            cur[i][j + 1] = cur[i][j];
            cur[i][j] = 0;
          }
          return nexts;
        }
      }
    }
    return nexts;
  }
};
