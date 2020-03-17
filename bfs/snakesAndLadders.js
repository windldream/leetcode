/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function (board) {
  const len = board.length;
  const numbersMap = new Map()
  let dir = true;
  let num = 1;
  for (let i = len - 1; i >= 0; i--) {
    if (dir) {
      for (let j = 0; j < len; j++) {
        numbersMap.set(num, [i, j]);
        num++;
      }
    } else {
      for (let j = len - 1; j >= 0; j--) {
        numbersMap.set(num, [i, j]);
        num++;
      }
    }
    dir = !dir;
  }

  const queue = [];
  const visited = new Set();
  queue.push(1);
  visited.add(len - 1 + '$' + 0);

  let step = -1;
  while (queue.length) {
    step++;
    for (let len = queue.length - 1; len >= 0; len--) {
      const num = queue.shift();

      if (num === board.length ** 2) {
        return step;
      }
      const nexts = getNexts(num, board, numbersMap);
      for (const [i, j, x] of nexts) {
        if (visited.has(i + '$' + j)) continue;
        queue.push(x);
        visited.add(i + '$' + j);
      }
    }
  }
  return -1;

  function getNexts(x, board, numbersMap) {
    const res = [];
    for (let i = 1; i <= 6 && x + i <= len * len; i++) {
      const [r, c] = numbersMap.get(x + i);
      if (board[r][c] === -1) {
        res.push([r, c, x + i]);
      } else {
        let [m, n] = numbersMap.get(board[r][c])
        res.push([m, n, board[r][c]]);
      }
    }
    return res;
  }
};

console.log(snakesAndLadders([[-1, 4, -1], [6, 2, 6], [-1, 3, -1]]))