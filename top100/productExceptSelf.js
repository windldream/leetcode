/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length
  const ans = Array(n).fill(0)

  let left = 1
  for (let i = 0; i < n; i++) {
    ans[i] = left
    left *= nums[i]
  }

  let right = 1
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= right
    right *= nums[i]
  }
  return ans
}

// [1, 2, 3, 4]
// [1, 0, 0, 0] left = 1
// [1, 1, 0, 0] left = 1 * 2
// [1, 1, 2, 0] left = 1 * 2 * 3
// [1, 1, 2, 6] left = 1 * 2 * 3 * 4 = 24

// [1, 1, 2, 6] right = 4
// [1, 1, 8, 6] right = 12
// [1, 12, 8, 6] right = 24
// [24, 12, 8, 6]
