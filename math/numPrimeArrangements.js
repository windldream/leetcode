/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  const mod = 10 ** 9 + 7
  const primeCount = getPrimeCount(n)
  const count = n - primeCount

  let ans = 1
  for (let i = primeCount; i >= 1; i--) {
    ans = (ans * i) % mod
  }

  for (let i = count; i >= 1; i--) {
    ans = (ans * i) % mod
  }
  return ans

  function getPrimeCount(n) {
    let count = 0
    for (let i = 2; i <= n; i++) {
      count += isPrime(i)
    }
    return count
  }

  function isPrime(n) {
    if (n < 2) return false
    if (n < 4) return true
    const num = Math.sqrt(n)
    for (let i = 2; i <= num; i++) {
      if (n % i === 0) return false
    }
    return true
  }
}

numPrimeArrangements(100)
