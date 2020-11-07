/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  if (A.length < 1) return 0

  let curMax = A[0],
    max = A[0],
    sum = A[0],
    curMin = A[0],
    min = A[0]
  for (let i = 1; i < A.length; i++) {
    sum += A[i]
    curMax = curMax > 0 ? curMax + A[i] : A[i]
    max = Math.max(curMax, max)
    curMin = curMin < 0 ? curMin + A[i] : A[i]
    min = Math.min(curMin, min)
  }

  if (max < 0) return max
  return Math.max(max, sum - min)
}

maxSubarraySumCircular([5, -3, 5])
