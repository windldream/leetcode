/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// var convertInteger = function (A, B) {
//   let i = 0
//   let cnt = 0
//   while (i++ < 32) {
//     if (((A >> i) ^ (B >> i)) & 1) {
//       cnt++
//     }
//   }
//   return cnt
// }

var convertInteger = function (A, B) {
  let num = A ^ B
  let ans = 0
  while (num) {
    num = num & (num - 1)
    ans++
  }
  return ans
}

convertInteger(29, 15)

// 11101
// 01111

// 01
// 10
