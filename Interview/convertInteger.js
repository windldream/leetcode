/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let i = 0
  let cnt = 0
  while (i++ < 32) {
    if (((A >> i) ^ (B >> i)) & 1) {
      cnt++
    }
  }
  return cnt
}

convertInteger(29, 15)

// 11101
// 01111

// 01
// 10
