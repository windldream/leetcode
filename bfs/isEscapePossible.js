/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function (blocked, source, target) {
  const blockLen = blocked.length;
  if (blockLen === 0) {
    return true;
  }

  const visited = new Set();
  const dir = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const M = 10 ** 6 - 1;
  const startQueue = [];
  const endQueue = [];

  startQueue.push(source);
  endQueue.push(target);
  visited.add(source.join('$'));
  visited.add(target.join('$'));

  while (startQueue.length && endQueue.length) {
    if (startQueue.length > blockLen && endQueue.length > blockLen) {
      return true;
    }
    for (let i = startQueue.length - 1; i >= 0; i--) {
      const [r, c] = startQueue.shift();
      if (endQueue.some(([i, j]) => i === r && j === c)) {
        return true;
      }
      for (let d = 0; d < 4; d++) {
        const m = dir[d][0] + r;
        const n = dir[d][0] + c;
        if (m < 0 || n < 0 || m >= M || n >= M || blocked.some(block => block[0] === m && block[1] === n) || visited.has(m + '$' + n)) {
          continue;
        }
        startQueue.push([m, n]);
        visited.add(m + '$' + n);
      }
    }

    for (let i = endQueue.length - 1; i >= 0; i--) {
      const [r, c] = endQueue.shift();
      if (startQueue.some(([i, j]) => i === r && j === c)) {
        return true;
      }
      for (let d = 0; d < 4; d++) {
        const m = dir[d][0] + r;
        const n = dir[d][0] + c;
        if (m < 0 || n < 0 || m >= M || n >= M || blocked.some(block => block[0] === m && block[1] === n) || visited.has(m + '$' + n)) {
          continue;
        }
        endQueue.push([m, n]);
        visited.add(m + '$' + n);
      }
    }
  }

  return false;
};