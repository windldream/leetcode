/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const n = grid.length;
  const HORIZONTAL = 1;
  const VERTICAL = 2;
  const visited = new Set();
  const queue = [];
  queue.push([[0, 0], [0, 1], VERTICAL]);
  visited.add([0, 0].join('$') + '#' + [0, 1].join('$') + '#' + HORIZONTAL);

  let step = 0;
  while (queue.length) {
    for (let len = queue.length - 1; len >= 0; len--) {
      const [tail, head, dir] = queue.shift();
      const [headR, headC] = head;
      const [tailR, tailC] = tail;
      if (tailR === n - 1 && tailC === n - 2 && headR === n - 1 && headC === n - 1) {
        return step;
      }
      if (dir === HORIZONTAL) {
        if (isValid(headR, headC + 1)) {
          if (visited.has([headR, headC].join('$') + '#' + [headR, headC + 1].join('$') + '#' + HORIZONTAL)) continue;
          queue.push([[headR, headC], [headR, headC + 1], HORIZONTAL]);
          visited.add([headR, headC].join('$') + '#' + [headR, headC + 1].join('$') + '#' + HORIZONTAL);
        }
        if (isValid(tailR + 1, tailC)) {
          if (visited.has([tailR, tailC].join('$') + '#' + [tailR + 1, tailC].join('$') + '#' + VERTICAL)) continue;
          queue.push([[tailR, tailC], [tailR + 1, tailC], VERTICAL]);
          visited.add([tailR, tailC].join('$') + '#' + [tailR + 1, tailC].join('$') + '#' + VERTICAL);
        }
      }
      if (dir === VERTICAL) {
        if (isValid(headR + 1, headC)) {
          if (visited.has([headR, headC].join('$') + '#' + [headR + 1, headC].join('$') + '#' + VERTICAL)) continue;
          queue.push([[headR, headC], [headR + 1, headC], VERTICAL]);
          visited.add([headR, headC].join('$') + '#' + [headR + 1, headC].join('$') + '#' + VERTICAL);
        }
        if (isValid(tailR, tailC + 1)) {
          if (visited.has([tailR, tailC].join('$') + '#' + [tailR, tailC + 1].join('$') + '#' + HORIZONTAL)) continue;
          queue.push([[tailR, tailC], [tailR, tailC + 1], HORIZONTAL]);
          visited.add([tailR, tailC].join('$') + '#' + [tailR, tailC + 1].join('$') + '#' + HORIZONTAL);
        }
      }
    }
    step++;
  }
  return - 1;

  function isValid(i, j) {
    return i >= 0 && i < n && j >= 0 && j < n && grid[i][j] !== 1;
  }
};

console.log(minimumMoves([[0, 0, 0, 0, 0, 1], [1, 1, 0, 0, 1, 0], [0, 0, 0, 0, 1, 1], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]]))