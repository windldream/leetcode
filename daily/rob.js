/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length
  if (n === 1) return nums[0]
  return Math.max(help(nums.slice(1)), help(nums.slice(0, n - 1)))

  function help(nums) {
    const n = nums.length
    prev = 0
    curr = nums[0]
    for (let i = 1; i < n; i++) {
      const tmp = prev
      prev = Math.max(curr, prev)
      curr = tmp + nums[i]
    }
    return Math.max(curr, prev)
  }
}

rob([1, 3, 1, 3, 100])
