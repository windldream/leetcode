/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function (nums, limit) {
  const diff = Array(2 * limit + 2).fill(0)
  const len = nums.length
  for (let i = 0; i < len / 2; i++) {
    const a = nums[i]
    const b = nums[len - 1 - i]

    let l = 2
    let r = 2 * limit
    diff[l] += 2
    diff[r + 1] -= 2

    l = 1 + Math.min(a, b)
    r = limit + Math.max(a, b)
    diff[l] -= 1
    diff[r + 1] += 1

    l = a + b
    r = a + b
    diff[l] -= 1
    diff[r + 1] += 1
  }

  let ans = len,
    sum = 0
  for (let i = 2; i <= 2 * limit; i++) {
    sum += diff[i]
    if (sum < ans) {
      ans = sum
    }
  }
  return ans
}
