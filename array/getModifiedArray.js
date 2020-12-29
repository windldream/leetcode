/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
var getModifiedArray = function(length, updates) {
  const ans = Array(length).fill(0)
  for (let i = 0; i < updates.length; i++) {
    const [start, end, inc] = updates[i]
    ans[start] += inc
    if (end < length - 1) ans[end + 1] -= inc
  }

  for (let i = 1; i < length; i++) {
    ans[i] += ans[i - 1]
  }
  return ans
};