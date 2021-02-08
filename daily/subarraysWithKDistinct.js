/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  return atMostK(A, K) - atMostK(A, K - 1)

  function atMostK(arr, k) {
    const n = arr.length
    const counter = new Map()
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
      counter.set(arr[r], (counter.get(arr[r]) || 0) + 1)
      while (counter.size > k) {
        counter.set(arr[l], counter.get(arr[l]) - 1)
        if (counter.get(arr[l]) === 0) counter.delete(arr[l])
        l++
      }
      ans += r - l + 1
      r++
    }
    return ans
  }
}

subarraysWithKDistinct([1, 2, 1, 2, 3], 2)
