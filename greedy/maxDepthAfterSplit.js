/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
  const len = seq.length,
    res = Array(len).fill(0);
  let depth = 0;
  for (let i = 0; i < len; i++) {
    if (seq[i] === '(') {
      depth++;
      if ((depth & 1) === 0) {
        res[i] = 1;
      }
    } else {
      if ((depth & 1) === 0) {
        res[i] = 1;
      }
      depth--;
    }
  }
  return res;
};

console.log(maxDepthAfterSplit('()(())()'));
