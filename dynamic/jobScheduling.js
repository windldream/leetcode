/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
  const len = startTime.length,
    times = Array(len)
      .fill(0)
      .map(() => []);
  for (let i = 0; i < len; i++) {
    times[i][0] = startTime[i];
    times[i][1] = endTime[i];
    times[i][2] = profit[i];
  }
  times.sort((a, b) => a[0] - b[0]);

  const dp = Array(len).fill(0);
  let res = 0,
    s = 0,
    pos = 0;
  for (let i = 0; i < len; i++) {
    for (let j = pos; j < i; j++) {
      if (times[i][0] >= times[j][1]) {
        // 保存时间区域不重合的最大位置
        if (j === pos) {
          pos++;
        }
        s = Math.max(s, dp[j]);
      }
    }
    dp[i] = s + times[i][2];
    res = Math.max(res, dp[i]);
  }
  return res;
};

console.log(
  jobScheduling([1, 2, 3, 4, 6], [3, 5, 10, 6, 9], [20, 20, 100, 70, 60])
);
