/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const start = '0000';
  if (deadends.includes(start)) {
    return -1;
  }
  const queue = [];
  const visited = new Set();
  let step = 0;
  queue.push(start);
  visited.add(start);

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      if (target === cur) {
        return step;
      }
      const nexts = getNext(cur);
      for (const next of nexts) {
        if (deadends.includes(next) || visited.has(next)) continue;
        queue.push(next);
        visited.add(next);
      }
    }
    step += 1;
  }

  return -1;

  // 0000 -> 1000 9000 0100 0900 0010 0090 0001 0009
  function getNext(cur) {
    const nexts = [];
    for (let i = 0; i < 4; i++) {
      const copy = cur.split('');

      if (cur[i] === '0') {
        copy[i] = '1';
      } else if (cur[i] === '9') {
        copy[i] = '0';
      } else {
        copy[i] = +cur[i] + 1 + '';
      }
      nexts.push(copy.join(''));

      if (cur[i] === '0') {
        copy[i] = '9';
      } else if (cur[i] === '9') {
        copy[i] = '8';
      } else {
        copy[i] = +cur[i] - 1 + '';
      }
      nexts.push(copy.join(''));
    }
    return nexts;
  }
};
