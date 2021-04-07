/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//   const n = nums.length
//   let l = 0
//   let r = n - 1
//   while (l <= r) {
//     const mid = (l + r) >> 1
//     if (nums[l] <= nums[mid]) {
//       if (nums[mid] > nums[r]) {
//         l = mid + 1
//       } else {
//         r = mid - 1
//       }
//     } else if (nums[l] > nums[mid]) {
//       if (nums[mid] > nums[r]) {
//         l = mid + 1
//       } else {
//         r = mid
//       }
//     }
//   }
//   return nums[l]
// }

var findMin = function (nums) {
  const n = nums.length
  let l = 0
  let r = n - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] < nums[r]) {
      r = mid
    } else if (nums[mid] >= nums[r]) {
      l = mid + 1
    }
  }
  return nums[l]
}

findMin([6, 7, 8, 1, 2, 3, 4, 5])
// 3 4 5 1 2
// 6 7 8 9 1 2 3
