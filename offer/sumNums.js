/**
 * @param {number} n
 * @return {number}
 */
// const sumNums = function (n) {
//   return n && n + sumNums(n - 1)
// }

const sumNums = function (n) {
  return (Math.pow(n, 2) + n) >> 1
}

// n > 0 ? n + sumNums(n - 1) : n
// n & n === n
// n ^ n === 0
// n | n === n
