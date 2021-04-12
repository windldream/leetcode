/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const n = a.length
  const ans = Array(n).fill(0)

  const left = Array(n).fill(0)
  left[0] = 1
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * a[i - 1]
  }

  const right = Array(n).fill(0)
  right[n - 1] = 1
  ans[n - 1] = left[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * a[i + 1]
    ans[i] = left[i] * right[i]
  }
  return ans
}

constructArr([1, 2, 3, 4, 5])
