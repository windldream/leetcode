/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  const land = Array(n).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    let l = Math.max(i - ranges[i], 0);
    let r = Math.min(i + ranges[i], n);
    // 记录 l 到 r 之间某个位置所能到达的最远位置
    for (let j = l; j < r; j++) {
      land[j] = Math.max(land[j], r);
    }
  }

  console.log(land);
  let res = 0,
    cur = 0;
  while (cur < n) {
    if (land[cur] === 0) {
      return -1;
    }
    cur = land[cur];
    res++;
  }
  return res;
};
