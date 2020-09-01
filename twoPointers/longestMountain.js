/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
  if (A.length < 3) return 0
  let ans = 0
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      let l = i - 1
      let r = i + 1
      while (l > 0 && A[l - 1] < A[l]) {
        l--
      }
      while (r < A.length - 1 && A[r + 1] < A[r]) {
        r++
      }
      ans = Math.max(ans, r - l + 1)
    }
  }
  return ans
}

longestMountain([2, 2, 2])
