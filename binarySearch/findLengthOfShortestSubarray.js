/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  const len = arr.length
  arr[-1] = -Infinity
  arr[len] = Infinity
  let l = 0
  let r = len - 1
  while (l <= len - 1 && arr[l - 1] <= arr[l]) {
    l++
  }
  while (r >= 0 && arr[r + 1] >= arr[r]) {
    r--
    if (r + 1 <= l - 1) return 0
  }

  let lo = 0
  let hi = len + 1
  let ans = len
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (exist(arr, mid, len, l, r)) {
      hi = mid
      ans = Math.min(ans, mid)
    } else {
      lo = mid + 1
    }
  }

  return ans

  function exist(arr, k, len, start, end) {
    if (end - start + 1 <= k && arr[start - 1] <= arr[end + 1]) return true
    for (let i = 0; i <= len - k; i++) {
      let l = 0
      let r = len - 1
      if (i < start) {
        l = i
      } else {
        l = start
      }
      if (i + k > end) {
        r = i + k - 1
      } else {
        r = end
      }
      if (r - l + 1 <= k && arr[l - 1] <= arr[r + 1]) return true
    }
    return false
  }
}
