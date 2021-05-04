/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let cnt = 0
  while (n >= 5) {
    n = ~~(n / 5)
    cnt += n
  }
  return cnt
}

// 5 -> 1 * 5
// 10 -> 2 * 5
// 15 -> 3 * 5
// 20 -> 4 * 5
// 25 -> 6 * 5
