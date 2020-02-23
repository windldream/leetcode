/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  const res = [];
  let curLevelCount = 1,
    allCount = 1;
  while (allCount < label) {
    curLevelCount = curLevelCount << 1;
    allCount += curLevelCount;
  }
  while (label > 1) {
    curLevelCount = curLevelCount >> 1;
    res.unshift(label);
    label = curLevelCount + (curLevelCount * 2 - 1 - Math.floor(label / 2));
  }
  res.unshift(1);
  return res;
};
