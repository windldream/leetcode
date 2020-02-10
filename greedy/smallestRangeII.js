/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function(A, K) {
  const len = A.length;
  A.sort((a, b) => a - b);

  let res = A[len - 1] - A[0];
  for (let i = 1; i < len; i++) {
    // 取区间的最大可能长度
    // 前提条件 A[i - 1] < A[i]
    const high = Math.max(A[len - 1] - K, A[i - 1] + K);
    const low = Math.min(A[0] + K, A[i] - K);
    res = Math.min(res, high - low);
  }
  return res;
};

console.log(smallestRangeII([1, 3, 6], 3));
