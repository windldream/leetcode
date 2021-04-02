/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var exchange = function (nums) {
//   let l = 0
//   let r = nums.length - 1
//   while (l < r) {
//     while (nums[l] % 2 === 0 && l < r) {
//       while (nums[r] % 2 === 0) r--
//       if (l >= r) break
//       const tmp = nums[l]
//       nums[l] = nums[r]
//       nums[r] = tmp
//       r--
//     }
//     l++
//   }
//   return nums
// }

var exchange = function (nums) {
  let fast = 0
  let slow = 0
  while (fast < nums.length) {
    if (nums[fast] & 1) {
      const tmp = nums[fast]
      nums[fast] = nums[slow]
      nums[slow] = tmp
      slow++
    }
    fast++
  }
  return nums
}

exchange([2, 4, 6])
