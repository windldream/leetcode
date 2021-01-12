/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const maximizeXor = function (nums, queries) {
  nums.sort((a, b) => a - b)
  const ans = []
  for (const [x, m] of queries) {
    const index = search(nums, m)
    if (index === -1) {
      ans.push(-1)
      continue
    }
    let max = -Infinity
    for (let i = 0; i <= index; i++) {
      max = Math.max(max, x ^ nums[i])
    }
    ans.push(max)
  }
  return ans

  function search(nums, val) {
    if (nums[0] > val) return -1
    if (nums[nums.length - 1] <= val) return nums.length - 1
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
      const mid = (l + r) >> 1
      if (nums[mid] > val) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }

    return nums[l] > val ? l - 1 : l
  }
}

maximizeXor(
  [2789, 2334, 389287485, 33554432, 937557817],
  [
    [815049, 259443277],
    [33554432, 1000000000],
    [270557, 104302223],
    [864045667, 1000000000],
    [21219239, 1000000000]
  ]
)
