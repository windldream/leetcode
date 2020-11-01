/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length
  const ans = Array(len).fill(0)

  let left = 1
  let right = 1
  for (let i = 0; i < len; i++) {
    ans[i] = left
    left *= nums[i]
  }
  for (let i = len - 1; i >= 0; i--) {
    ans[i] *= right
    right *= nums[i]
  }

  return ans
}

productExceptSelf([1, 2, 3, 4])
