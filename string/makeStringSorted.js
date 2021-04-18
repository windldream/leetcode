/**
 * @param {string} s
 * @return {number}
 */
var makeStringSorted = function (s) {
  const mod = BigInt(10 ** 9 + 7)
  const n = BigInt(s.length)
  const fac = Array(n + 1n).fill(0n)
  const facinv = Array(n + 1n).fill(0n)
  fac[0n] = facinv[0n] = 1n
  for (let i = 1n; i <= n; i += 1n) {
    fac[i] = (fac[i - 1n] * i) % mod
    facinv[i] = quickPow(fac[i], mod - 2n)
  }

  const freq = Array(26).fill(0n)
  for (const c of s) {
    const index = toIndex(c)
    freq[index] += 1n
  }

  let ans = 0n
  for (let i = 0n; i < n - 1n; i += 1n) {
    let rank = 0n
    for (let j = 0n; j < toIndex(s[i]); j += 1n) {
      rank += freq[j]
    }
    let cur = (rank * fac[n - i - 1n]) % mod
    for (let j = 0n; j < 26n; j += 1n) {
      cur = (cur * facinv[freq[j]]) % mod
    }
    ans = (ans + cur) % mod
    freq[toIndex(s[i])] -= 1n
  }
  return ans

  function toIndex(c) {
    return BigInt(c.charCodeAt() - 'a'.charCodeAt())
  }

  function quickPow(x, y) {
    const mod = BigInt(10 ** 9 + 7)
    let res = 1n
    let mul = x
    while (y) {
      if (y & 1n) {
        res = (res * mul) % mod
      }
      mul = (mul * mul) % mod
      y = y >> 1n
    }
    return res
  }
}

makeStringSorted('aabaa')
