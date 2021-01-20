/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  if (n === 1) return 9
  const mod = 1337n
  const max = 10 ** n - 1
  const min = 10 ** (n - 1)
  for (let i = max; i >= min; i--) {
    const num = BigInt(i + '' + (i + '').split('').reverse().join(''))
    for (let j = BigInt(max); j * j >= num; j--) {
      if (num % BigInt(j) === 0n) {
        return num % mod
      }
    }
  }
  return -1
}
