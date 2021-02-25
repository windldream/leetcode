/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1])
  const ans = []
  for (let [start, end] of intervals) {
    if (ans.length === 0) {
      ans.push([start, end])
    } else {
      let [s, e] = ans.pop()
      if (start <= s) {
        if (ans.length && ans[ans.length - 1][1] >= start) {
          while (ans.length && ans[ans.length - 1][1] >= start) {
            ;[s, e] = ans.pop()
          }
          if (start <= s) {
            ans.push([start, end])
          } else {
            ans.push([s, end])
          }
        } else {
          ans.push([start, end])
        }
      } else {
        // start > s
        if (start <= e) {
          ans.push([s, end])
        } else {
          ans.push([s, e])
          ans.push([start, end])
        }
      }
    }
  }

  return ans
}

// [1, 3] [4, 8] [2, 9]
