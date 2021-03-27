/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const n = nums.length
  if (n < 2) return 0

  const left = Array(n).fill(0)
  let max = nums[0]
  left[0] = nums[0]
  for (let i = 1; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i]
      left[i] = max
    } else {
      left[i] = max
    }
  }

  const right = Array(n).fill(0)
  let min = nums[n - 1]
  right[n - 1] = min
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < min) {
      min = nums[i]
      right[i] = min
    } else {
      right[i] = min
    }
  }

  let l = -1
  for (let i = 0; i < n; i++) {
    if (left[i] > right[i]) {
      l = i
      break
    }
  }
  if (l === -1) return 0

  let r = n
  for (let i = n - 1; i >= 0; i--) {
    if (right[i] < left[i]) {
      r = i
      break
    }
  }

  return r - l + 1
}

// 左边最大的要小于 右边最小的
// left数组保存左边最大的元素
// right数组保存右边最小的元素

findUnsortedSubarray([1, 2, 3, 4, 5, 6, 1, 2, 1, 2])
