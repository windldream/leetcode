/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function (A) {
  const len = A.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    if (len - 1 - i < ans) break
    for (let j = len - 1; j > i; j--) {
      if (A[j] >= A[i]) ans = Math.max(ans, j - i)
    }
  }
  return ans
}
