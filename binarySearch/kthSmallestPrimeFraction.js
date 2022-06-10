/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length
  const eps = 1e-8
  let l = 0
  let r = 1
  let ans = [-1, -1]

  while (r - l > eps) {
    const mid = (l + r) / 2
    const [cnt, x, y] = count(arr, mid)

    if (cnt >= k) {
      ans[0] = x
      ans[1] = y
      r = mid
    } else {
      l = mid
    }
  }

  return ans

  function count(arr, t) {
    const eps = 1e-8
    let ans = 0
    let x = -1
    let y = -1

    for (let i = 0, j = 1; j < n; j++) {
      while (arr[i + 1] / arr[j] <= t) i++
      // 由于数组递增的特性
      if (arr[i] / arr[j] <= t) ans += i + 1

      if (Math.abs(arr[i] / arr[j] - t) < eps) {
        x = arr[i]
        y = arr[j]
      }
    }

    return [ans, x, y]
  }
}
