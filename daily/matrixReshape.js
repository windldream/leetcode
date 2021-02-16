/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const n = nums.length
  const m = nums[0].length
  if (n * m !== r * c) return nums

  const ans = Array(r)
    .fill(0)
    .map(() => [])
  let row = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (ans[row].length < c) {
        ans[row].push(nums[i][j])
      } else {
        row++
        ans[row].push(nums[i][j])
      }
    }
  }
  return ans
}
