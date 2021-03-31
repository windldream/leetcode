/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  if (n < 4) return n - 1
  const mod = BigInt(10 ** 9 + 7)
  n = BigInt(n)
  let remain = n % 3n
  n = ~~(n / 3n)
  if (remain === 1n) return (myPow(3n, n - 1n) * 4n) % mod
  if (remain === 2n) return (myPow(3n, n) * 2n) % mod
  return myPow(3n, n)

  function myPow(num, n) {
    let ans = 1n
    while (n) {
      if (n & 1n) {
        ans = (ans * num) % mod
      }
      num = (num * num) % mod
      n >>= 1n
    }
    return ans
  }
}
