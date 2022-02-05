/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  const total = nums.reduce((pre, cur) => pre + cur, 0)
  const newNums = nums.concat(nums)
  let l = 0
  let r = 0
  let count = 0
  let ans = Infinity

  while (r < newNums.length) {
    count += newNums[r++]

    if (r - l === total) {
      ans = Math.min(ans, total - count)
      count -= newNums[l++]
    }
  }

  return ans === Infinity ? 0 : ans
}
