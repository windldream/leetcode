/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubseqWidths = function (A) {
  const mod = 10 ** 9 + 7
  const len = A.length
  A.sort((a, b) => a - b)
  const two = Array(len + 1).fill(1)
  for (let i = 1; i <= len; i++) {
    two[i] = (two[i - 1] << 1) % mod
  }
  let ans = 0
  for (let i = 0; i < len; i++) {
    const left = i
    const right = len - i - 1
    ans = (ans + (two[left] - two[right]) * A[i]) % mod
  }
  return (ans + mod) % mod
}
