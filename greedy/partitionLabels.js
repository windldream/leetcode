/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const len = S.length,
    lastMap = {};
  for (let i = 0; i < len; i++) {
    lastMap[S[i]] = i;
  }

  const res = [];
  let prevIndex = -1,
    maxIndex = 0;
  for (let i = 0; i < len; i++) {
    let index = lastMap[S[i]];
    if (index > maxIndex) {
      maxIndex = index;
    }
    if (i === maxIndex) {
      res.push(maxIndex - prevIndex);
      prevIndex = maxIndex;
    }
  }
  return res;
};

console.log(partitionLabels('ababcbacabdefegdehijhklij'));
