/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let l = 0
  let r = 0
  let ans = 0
  let count = 0
  while (r < nums.length) {
    if (nums[r++] % 2) {
      count++
    }
    while (count === k) {
      let tmp = r
      while (r < nums.length && nums[r] % 2 === 0) {
        r++
      }
      let rCount = r - tmp

      let lCount = 0
      while (nums[l] % 2 === 0) {
        lCount++
        l++
      }

      ans += (lCount + 1) * (rCount + 1)
      l++
      count--
    }
  }
  return ans
}

numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)
