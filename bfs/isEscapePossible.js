/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
  const blockLen = blocked.length;
  if (blockLen === 0) {
    return true;
  }

  const startVisited = new Set();
  const endVisited = new Set();
  const M = 10 ** 6 - 1;
  const startQueue = [];
  const endQueue = [];

  startQueue.push(source);
  endQueue.push(target);
  startVisited.add(source.join('$'));
  endVisited.add(target.join('$'));

  while (startQueue.length && endQueue.length) {
    if (startQueue.length > blockLen && endQueue.length > blockLen) {
      return true;
    }
    for (let i = startQueue.length - 1; i >= 0; i--) {
      const [r, c] = startQueue.shift();
      if (endQueue.some(([i, j]) => i === r && j === c)) {
        return true;
      }
      addNode(startQueue, r, c, startVisited);
    }

    for (let i = endQueue.length - 1; i >= 0; i--) {
      const [r, c] = endQueue.shift();
      if (startQueue.some(([i, j]) => i === r && j === c)) {
        return true;
      }
      addNode(endQueue, r, c, endVisited);
    }
  }

  return false;

  function addNode(queue, r, c, visited) {
    const dir = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0]
    ];
    for (let d = 0; d < 4; d++) {
      const m = dir[d][0] + r;
      const n = dir[d][1] + c;
      if (
        m < 0 ||
        n < 0 ||
        m >= M ||
        n >= M ||
        blocked.some(([i, j]) => i === m && j === n) ||
        visited.has(m + '$' + n)
      ) {
        continue;
      }
      queue.push([m, n]);
      visited.add(m + '$' + n);
    }
  }
};
