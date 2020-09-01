/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k < 0) return 0
  const saw = new Set()
  const diff = new Set()
  for (const num of nums) {
    // diff 存储较大的值或者较小的值都行
    if (saw.has(num - k)) {
      diff.add(num)
    }
    if (saw.has(num + k)) {
      diff.add(num + k)
    }
    saw.add(num)
  }
  return diff.size
}
