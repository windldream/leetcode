/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length
  if (n < 3) return []

  nums.sort((a, b) => a - b)
  const ans = []
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let l = i + 1
    let r = n - 1
    while (l < r) {
      const sum = nums[l] + nums[r] + nums[i]
      if (sum === 0) {
        ans.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] === nums[l - 1]) l++
        r--
        while (nums[r] === nums[r + 1]) r--
      } else if (sum > 0) {
        r--
      } else {
        l++
      }
    }
  }
  return ans
}

threeSum([0, 0, 0, 0])
