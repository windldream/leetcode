/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function (n) {
  const mod = 10n ** 9n + 7n
  let ans = 0n
  let bit = 0n
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) bit += 1n
    ans = ((ans << bit) + BigInt(i)) % mod
  }
  return ans
}

concatenatedBinary(12)
