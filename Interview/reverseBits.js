/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  let cnt = 1
  let pos = -1
  let ans = 0
  for (let i = 0; i < 33; i++) {
    if (num & 1) {
      cnt++
    } else {
      ans = Math.max(ans, cnt)
      cnt = i - pos
      pos = i
    }
    num >>>= 1
  }
  return Math.min(32, ans)
}

// var reverseBits = function (num) {
//   let str = (num >>> 0).toString(2)
//   let l = 0
//   let r = 0
//   let zeroCnt = 0
//   let ans = 0
//   if (str[0] === '1') str = '0' + str
//   while (r < str.length) {
//     if (str[r++] === '0') {
//       zeroCnt += 1
//     }
//     while (zeroCnt > 1) {
//       if (str[l] === '0') zeroCnt -= 1
//       l++
//     }
//     ans = Math.max(ans, r - l)
//   }
//   return Math.min(32, ans)
// }

reverseBits(-1)
