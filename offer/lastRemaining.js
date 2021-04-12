/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let ans = 0
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i
  }
  return ans
}

// 0 1 2 3 4
// 3 4 0 1    2
// 1 3 4      0
// 1 3        4
// 3          1
//
