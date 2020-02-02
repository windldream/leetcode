/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
  const len = piles.length,
    sumArr = [],
    map = {};

  sumArr[0] = 0;
  for (let i = 0; i < len; i++) {
    sumArr[i + 1] = sumArr[i] + piles[i];
  }

  return helper(0, 1);

  function helper(i, m) {
    if (map[i + '$' + m]) {
      return map[i + '$' + m];
    }
    if (i >= len) {
      return 0;
    }
    if (i + 2 * m >= len) {
      return sumArr[len] - sumArr[i];
    }
    let max = 0;
    for (let s = 1; s <= 2 * m; s++) {
      max = Math.max(
        max,
        // sumArr[i + s] - sumArr[i] + sumArr[len] - sumArr[i + s] - helper(i + s, Math.max(s, m))
        // 当前的选择 加上 剩余的总和减去 对手最优的选择
        sumArr[len] - sumArr[i] - helper(i + s, Math.max(s, m))
      );
    }
    map[i + '$' + m] = max;
    return max;
  }
};

console.log(stoneGameII([2, 7, 9, 4, 4]));
