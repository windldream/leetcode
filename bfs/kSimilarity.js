/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function (A, B) {
  const queue = [];
  const visited = new Set();
  let step = 0;
  queue.push(A);
  visited.add(A);

  while (queue.length) {
    const len = queue.length;
    for (let k = 0; k < len; k++) {
      const str = queue.shift();
      if (str === B) {
        return step;
      }

      for (const next of getNexts(str, B)) {
        if (!visited.has(next)) {
          queue.push(next);
          visited.add(next);
        }
      }
    }
    step += 1;
  }

  return -1;

  function getNexts(str, target) {
    const res = new Set();
    let i = 0;
    for (; i < str.length; i++) {
      if (str[i] !== target[i]) break;
    }
    const strToArr = str.split('');
    for (let j = i + 1; j < strToArr.length; j++) {
      if (strToArr[j] === target[i]) {
        [strToArr[i], strToArr[j]] = [strToArr[j], strToArr[i]];
        res.add(strToArr.join(''));
        [strToArr[i], strToArr[j]] = [strToArr[j], strToArr[i]];
      }
    }
    return res;
  }
};
