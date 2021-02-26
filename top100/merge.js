/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const n = intervals.length
  const ans = []
  let i = 0
  while (i < n) {
    let [start, end] = intervals[i]
    while (i < n - 1 && intervals[i + 1][0] <= end) {
      end = Math.max(intervals[++i][1], end)
    }
    ans.push([start, end])
    i++
  }

  return ans
}

// [1, 3] [4, 8] [2, 9]
