/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  A.sort((a, b) => a - b)
  let ans = 0
  for (let i = 1; i < A.length; i++) {
    if (A[i] <= A[i - 1]) {
      const pre = A[i]
      A[i] = A[i - 1] + 1
      ans += A[i] - pre
    }
  }
  return ans
}

minIncrementForUnique([3, 2, 1, 2, 1, 7])
