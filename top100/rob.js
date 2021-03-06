/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  if (n === 0) return 0
  let pre = 0
  let cur = nums[0]
  for (let i = 1; i < n; i++) {
    const temp = cur
    cur = Math.max(pre + nums[i], cur)
    pre = temp
  }
  return cur
}
