/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
  stones.sort((a, b) => a - b);
  const len = stones.length,
    sum = stones.reduce((prev, curr) => prev + curr),
    cap = Math.floor(sum / 2),
    dp = Array(cap + 1).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = cap; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - 2 * dp[cap];
};

console.log(lastStoneWeightII([31, 26, 33, 21, 40]));
