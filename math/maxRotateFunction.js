/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  const len = A.length
  let total = 0n
  let sum = 0n
  for (let i = 0; i < len; i++) {
    sum += BigInt(A[i])
    total += BigInt(i * A[i])
  }

  let max = total
  let cur = 0n
  for (let i = 1; i < len; i++) {
    cur = total - sum + BigInt(len * A[i - 1])
    max = max > cur ? max : cur
    total = cur
  }
  return max
}

maxRotateFunction([4, 3, 2, 6])
