/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  const a = A.reduce((pre, cur) => pre + cur, 0)
  const b = B.reduce((pre, cur) => pre + cur, 0)
  const sum = (a + b) >> 1

  for (let i = 0; i < A.length; i++) {
    const total = a - A[i]
    const diff = sum - total
    if (B.includes(diff)) {
      return [A[i], diff]
    }
  }
}
