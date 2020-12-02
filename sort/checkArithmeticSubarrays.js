/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const m = l.length
  const ans = []
  outer: for (let i = 0; i < m; i++) {
    const arr = nums.slice(l[i], r[i] + 1)
    if (arr.length < 3) {
      ans[i] = true
      continue
    }
    arr.sort((a, b) => a - b)
    for (let j = 2; j < arr.length; j++) {
      if (arr[j] - arr[j - 1] !== arr[j - 1] - arr[j - 2]) {
        ans[i] = false
        continue outer
      }
    }
    ans[i] = true
  }
  return ans
}
