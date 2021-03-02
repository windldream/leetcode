/**
 * @param {number} num
 * @return {number[]}
 */
// var countBits = function (num) {
//   const ans = Array(num + 1).fill(0)
//   for (let i = 0; i <= num; i++) {
//     ans[i] = countBit(i)
//   }
//   return ans

//   function countBit(n) {
//     let count = 0
//     while (n > 0) {
//       count += n & 1
//       n = n >> 1
//     }
//     return count
//   }
// }

// var countBits = function (num) {
//   const ans = Array(num + 1).fill(0)
//   for (let i = 0; i <= num; i++) {
//     if (i & 1) {
//       ans[i] = ans[i - 1] + 1
//     } else {
//       ans[i] = ans[i / 2]
//     }
//   }
//   return ans
// }

// i & (i - 1) 消去最右边的1
var countBits = function (num) {
  const ans = Array(num + 1).fill(0)
  for (let i = 1; i <= num; i++) {
    ans[i] = ans[i & (i - 1)] + 1
  }
  return ans
}

countBits(2)

// 0000 -> 0
// 0001 -> 1
// 0010 -> 1
// 0011 -> 2
// 0100 -> 1
// 0101 -> 2
// 0110 -> 2
// 0111 -> 3
