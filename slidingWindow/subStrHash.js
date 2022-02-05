/**
 * @param {string} s
 * @param {number} power
 * @param {number} modulo
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */

// TODO 抄的没看懂
var subStrHash = function (s, power, modulo, k, hashValue) {
  const n = s.length
  const M = BigInt(modulo)
  power = BigInt(power)
  const val = (ch) => BigInt(ch.charCodeAt() - 'a'.charCodeAt() + 1)
  let h = 0n
  let pk = 1n
  let first = n

  for (let i = 0; i < k - 1; i++) {
    pk = (pk * power) % M
  }

  for (let i = n - 1; i >= 0; i--) {
    h = (h * power + val(s[i])) % M

    if (i <= n - k) {
      if (h % M === BigInt(hashValue)) first = i
      h = (h - ((pk * val(s[i + k - 1])) % M) + M) % M
    }
  }

  return s.substring(first, first + k)
}
