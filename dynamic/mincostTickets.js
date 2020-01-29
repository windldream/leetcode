/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const dp = Array(366).fill(0),
    daysSet = new Set();

  for (let day of days) {
    daysSet.add(day);
  }
  return helper(1);

  function helper(index) {
    if (index > 365) {
      return 0;
    }
    if (dp[index]) {
      return dp[index];
    }
    let res = 0;
    if (daysSet.has(index)) {
      res = Math.min(
        helper(index + 1) + costs[0],
        helper(index + 7) + costs[1],
        helper(index + 30) + costs[2]
      );
    } else {
      res = helper(index + 1);
    }
    dp[index] = res;
    return res;
  }
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
