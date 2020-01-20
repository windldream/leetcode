/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  if (startFuel >= target) {
    return 0;
  }
  const len = stations.length;
  if (len === 0 && target > startFuel) {
    return -1;
  }

  const dp = Array(len + 1).fill(0);
  dp[0] = startFuel;
  // dp[i] 表示加油 i 次所能行驶的最远距离
  for (let i = 0; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j] >= stations[i][0]) {
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
      }
    }
  }

  for (let i = 0; i <= len; i++) {
    if (dp[i] >= target) {
      return i;
    }
  }

  return -1;
};

console.log(
  minRefuelStops(100, 10, [
    [10, 60],
    [20, 30],
    [30, 30],
    [60, 40]
  ])
);
