/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length
  if (n < 2) return

  let i = n - 2
  let j = n - 1
  let k = n - 1
  // find nums[i] < nums[j]
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--
    }
    ;[nums[i], nums[k]] = [nums[k], nums[i]]
  }

  for (i = j, j = n - 1; i < j; i++, j--) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
}

// 1 2 3 4
// 1 2 4 3
// 1 3 2 4
// 1 3 4 2
