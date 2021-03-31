/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) return n - 1
  const mod = n % 3
  n = ~~(n / 3)
  if (mod === 1) {
    return myPow(3, n - 1) * 4
  }
  if (mod === 2) {
    return myPow(3, n) * 2
  }
  return myPow(3, n)

  function myPow(num, n) {
    let ans = 1
    while (n) {
      if (n & 1) {
        ans *= num
      }
      num *= num
      n >>= 1
    }
    return ans
  }
}

// 4 2 * 2
// 3 1 * 3
// 3 5
// 3 * 3
// 9 2
// 9 * 9
