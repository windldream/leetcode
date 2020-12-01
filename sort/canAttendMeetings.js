/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  const len = intervals.length
  if (len < 2) return true
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return false
  }
  return true
}
