/**
 * @param {number[]} stones
 * @param {number} K
 * @return {number}
 */
var mergeStones = function(stones, K) {
  const len = stones.length;
  if ((len - K) % (K - 1)) {
    return -1;
  }
  if (len === 1) {
    return 0;
  }
  let sumArr = [];
  for (let i = 0, sum = 0; i < len; i++) {
    sum = sum + stones[i];
    sumArr[i] = sum;
  }
  const map = {};
  return helper(0, len - 1, 1);

  function sum(start, end) {
    return sumArr[end] - sumArr[start] + stones[start];
  }

  function helper(start, end, k) {
    const key = start + '$' + end + '$' + k;
    if (map[key]) {
      return map[key];
    }
    // 合成一堆的先决条件是合成 K 堆
    // 再由 K 堆合成一堆
    if (k === 1) {
      let part1 = helper(start, end, K);
      let part2 = sum(start, end);
      return (map[key] = part1 + part2);
    }
    let res = Infinity;
    // m 至少要将 (0, m) 从 start 开始分成 k - 1 堆
    // 故 m 的最小值为 (start, start + 1, ...start + k - 2)
    for (let m = start + k - 2; m < end; m++) {
      // 如果 part1 或者 part2 的长度是一 那么就不需要分堆了
      let part1 = start === m ? 0 : helper(start, m, k - 1);
      let part2 = m + 1 === end ? 0 : helper(m + 1, end, 1);
      res = Math.min(res, part1 + part2);
    }
    return (map[key] = res);
  }
};

console.log(mergeStones([3, 2, 4, 1], 2));
