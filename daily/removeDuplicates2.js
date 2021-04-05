/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   if (nums.length <= 2) return nums.length
//   let count = 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       count += 1
//     } else {
//       count = 1
//     }
//     if (count > 2) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// }

var removeDuplicates = function (nums) {
  let i = 0
  for (const num of nums) {
    if (i < 2 || num > nums[i - 2]) {
      nums[i++] = num
    }
  }
  return i
}
