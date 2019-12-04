/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((arr1, arr2) => {
    return arr1[0] - arr2[0];
  });

  let res = [],
    i = 0,
    n = intervals.length;

  while (i < n) {
    let left = intervals[i][0],
      right = intervals[i][1];

    while (i < n - 1 && intervals[i + 1][0] < right) {
      right = Math.max(intervals[++i][i], right)
    }

    res.push([left, right]);
    i++;
  }

  return res;
};

console.log(insert([
  [1, 3],
  [6, 9]
], [2, 5]))