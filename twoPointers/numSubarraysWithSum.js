/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function (A, S) {
  const sum = Array(A.length + 1).fill(0)
  for (let i = 0; i < A.length; i++) {
    sum[i + 1] = sum[i] + A[i]
  }

  const count = new Map()
  let ans = 0
  for (const x of sum) {
    if (!count.has(x)) {
      count.set(x, 0)
    }
    ans += count.get(x)
    if (!count.has(x + S)) {
      count.set(x + S, 0)
    }
    count.set(x + S, count.get(x + S) + 1)
  }
  return ans
}

numSubarraysWithSum([0, 0, 0, 0, 0], 0)
