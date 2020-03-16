/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function (A, B) {
  const queue = [];
  const visited = new Set();
  let k = 0;
  queue.push(A);
  visited.add(A);

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const str = queue.shift().split('');
      if (str.join('') === B) {
        return k;
      }
      for (let s = 0; s < str.length; s++) {
        for (let j = 0; j < str[s].length; j++) {
          [str[s], str[j]] = [str[j], str[s]];
          if (visited.has(str.join(''))) continue;
          queue.push(str.join(''));
          visited.add(str.join(''));
        }
      }
    }
    k++;
  }

  return -1;
};