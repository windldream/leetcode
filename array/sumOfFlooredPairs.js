/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function (nums) {
  const mod = 1e9 + 7
  const n = nums.length
  const max = Math.max(...nums)
  const num = Array(max + 1).fill(0)
  let ans = 0

  // 统计数字出现的频率
  for (let i = 0; i < n; i++) {
    num[nums[i]] += 1
  }

  // 数字出现频率的前缀和
  for (let i = 1; i <= max; i++) {
    num[i] += num[i - 1]
  }

  for (let i = 1; i <= max; i++) {
    // 数字i出现的次数
    let x = num[i] - num[i - 1]
    if (x === 0) continue

    for (let j = i; j <= max; j += i) {
      const y = num[Math.min(j + i - 1, max)] - num[j - 1]
      ans = (ans + ~~(j / i) * y * x) % mod
    }
  }
  return ans
}
