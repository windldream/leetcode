/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function(intervals, toBeRemoved) {
  const ans = []
  let [s, e] = toBeRemoved
  for (const [start, end] of intervals) {
    if (end <= s || e <= start) {
      ans.push([start, end])
    } else if (s <= start) {
      if (e >= end) {
        s = end
      } else if (e < end) {
        ans.push([e, end])
        e = start
      }
    } else if (s > start) {
      if (e >= end) {
        ans.push([start, s])
        s = end
      } else {
        ans.push([start, s])
        ans.push([e, end])
      }
    }
  }
  return ans
};

// 1, 4 -> 0, 3