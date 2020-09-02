/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function (A, K) {
  let l = 0
  let l1 = 0
  let r = 0
  const count = new Map()
  const count1 = new Map()
  let ans = 0
  while (r < A.length) {
    if (!count.has(A[r])) {
      count.set(A[r], 0)
    }
    if (!count1.has(A[r])) {
      count1.set(A[r], 0)
    }
    count.set(A[r], count.get(A[r]) + 1)
    count1.set(A[r], count1.get(A[r]) + 1)
    while (count.size > K) {
      count.set(A[l], count.get(A[l]) - 1)
      if (count.get(A[l]) === 0) {
        count.delete(A[l])
      }
      l++
    }
    while (count1.size >= K) {
      count1.set(A[l1], count1.get(A[l1]) - 1)
      if (count1.get(A[l1]) === 0) {
        count1.delete(A[l1])
      }
      l1++
    }
    // 字串的结尾都是 r 所以 l1 和 l 之间肯定就只有一个不同的数
    ans += l1 - l
    r++
  }
  return ans
}

subarraysWithKDistinct([1, 2, 1, 2, 3], 2)
