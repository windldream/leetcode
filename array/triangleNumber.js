/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  const len = nums.length
  if (len < 3) return 0
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (check(nums[i], nums[j], nums[k])) {
          ans++
        }
      }
    }
  }
  return ans

  function check(a, b, c) {
    return a + b > c && a + c > b && b + c > a
  }
}
