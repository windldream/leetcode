/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [],
    i = 0,
    n = intervals.length;

  while (i < n) {
    let left = intervals[i][0],
      right = intervals[i][1];

    while (i < n - 1 && intervals[i + 1][0] <= right) {
      right = Math.max(intervals[++i][1], right);
    }

    res.push([left, right]);
    i++;
  }

  return res;
};