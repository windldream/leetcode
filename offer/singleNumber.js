// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = function (nums) {
//   let ans = 0
//   for (let i = 0; i < 31; i++) {
//     const mask = 1 << i
//     let count = 0
//     // 使用mask分组
//     for (const num of nums) {
//       if (mask & num) count += 1
//     }
//     if (count % 3 !== 0) {
//       ans = ans | mask
//     }
//   }
//   return ans
// }

const singleNumber = function (nums) {
  return ([...new Set(nums)].reduce((prev, curr) => prev + curr, 0) * 3 - nums.reduce((prev, curr) => prev + curr)) / 2
}
