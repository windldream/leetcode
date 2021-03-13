/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//   const n = nums.length
//   let i = 0
//   let j = 0
//   while (i < n) {
//     if (nums[i] !== 0) {
//       nums[j++] = nums[i]
//     }
//     i++
//   }
//   while (j < n) {
//     nums[j++] = 0
//   }
// }

var moveZeroes = function (nums) {
  const n = nums.length
  for (let i = 0, j = 0; i < n; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        nums[j] = nums[i]
        nums[i] = 0
      }
      j++
    }
  }
}

// 0 1 0 3 12
// 0 1 0 3 12
// 1 0 0 3 12
// 1 0 0 3 12
// 1 3 0 0
