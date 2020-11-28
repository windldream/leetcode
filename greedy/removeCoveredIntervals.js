/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  const len = intervals.length
  let ans = 0
  outer: for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (check(intervals[i], intervals[j])) continue outer
    }
    ans++
  }
  return ans

  function check(a, b) {
    return b[0] <= a[0] && a[1] <= b[1]
  }
}
