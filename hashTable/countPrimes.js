/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const isPrime = Array(n).fill(0)
  for (let i = 2; i < n; i++) {
    isPrime[i] = 1
  }

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = 0
    }
  }

  let ans = 0
  for (let i = 2; i < n; i++) {
    ans += isPrime[i]
  }
  return ans
}
