/**
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = function(arrays) {
  const m = arrays.length
  if (m === 0) return 0
  let max = arrays[0][arrays[0].length - 1]
  let min = arrays[0][0]
  let ans = 0
  for (let i = 1; i < m; i++) {
    const len = arrays[i].length
    ans = Math.max(ans, max - arrays[i][0], arrays[i][len - 1] - min)
    max = Math.max(max, arrays[i][len - 1])
    min = Math.min(min, arrays[i][0])
  }
  return ans
};