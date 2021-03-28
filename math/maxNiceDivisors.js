/**
 * @param {number} primeFactors
 * @return {number}
 */
var maxNiceDivisors = function (primeFactors) {
  if (primeFactors <= 3) return primeFactors
  const mod = BigInt(10 ** 9 + 7)

  let ans = 0n
  let quotient = BigInt(~~(primeFactors / 3))
  let remainder = BigInt(primeFactors % 3)
  if (remainder === 0n) {
    ans = mypow(3n, quotient)
  } else if (remainder === 1n) {
    ans = mypow(3n, quotient - 1n) * 4n
  } else {
    ans = mypow(3n, quotient) * 2n
  }
  return ans % mod

  function mypow(x, n) {
    let ans = 1n
    while (n) {
      if (n % 2n) {
        ans = (ans * x) % mod
      }
      x = (x * x) % mod
      n = n >> 1n
    }
    return ans
  }
}
