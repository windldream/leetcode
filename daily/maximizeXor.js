/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var maximizeXor = function (nums, queries) {
  nums.sort((a, b) => a - b)

  const ans = []
  for (const [x, y] of queries) {
    const idx = search(nums, y)
    if (idx === -1) ans.push(idx)
    else {
      let max = x ^ nums[0]
      for (let i = 1; i <= idx; i++) {
        max = Math.max(max, nums[i] ^ x)
      }
      ans.push(max)
    }
  }
  return ans

  function search(nums, t) {
    let l = 0
    let r = nums.length - 1
    let ans = -1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] > t) {
        r = mid - 1
      } else {
        l = mid + 1
        ans = mid
      }
    }
    return ans
  }
}

maximizeXor([5, 8, 0, 3, 2, 10, 9, 2, 4, 5], [[3, 8]])
