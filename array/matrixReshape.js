/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length
  const n = nums[0].length
  if (m * n < r * c || (m === r && n === c)) return nums

  const ans = Array(r)
    .fill(0)
    .map(() => [])
  let row = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (ans[row].length === c) {
        row++
      }
      ans[row].push(nums[i][j])
    }
  }
  return ans
}

matrixReshape(
  [
    [1, 2],
    [3, 4]
  ],
  1,
  4
)
