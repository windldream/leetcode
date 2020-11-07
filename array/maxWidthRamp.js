/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
  const stack = []
  for (let i = 0; i < A.length; i++) {
    if (stack.length === 0 || A[stack[stack.length - 1]] > A[i]) {
      stack.push(i)
    }
  }

  let ans = 0
  for (let i = A.length - 1; i >= 0; i--) {
    while (stack.length && A[stack[stack.length - 1]] <= A[i]) {
      const cur = stack.pop()
      ans = Math.max(ans, i - cur)
    }
  }
  return ans
}

maxWidthRamp([2, 4, 1, 3])
