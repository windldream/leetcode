/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfFlooredPairs = function (nums) {
  const mod = 1e9 + 7
  const n = nums.length
  const max = Math.max(...nums)
  const list = Array(max + 1).fill(0)

  for (const num of nums) {
    list[num] += 1
  }

  for (let i = 1; i <= max; i++) {
    list[i] += list[i - 1]
  }

  let ans = 0

  for (let i = 1; i <= max; i++) {
    const x = list[i] - list[i - 1]

    if (x === 0) continue

    for (let j = i; j <= max; j = j + i) {
      const y = list[Math.min(j + i - 1, max)] - list[j - 1]
      ans = (ans + Math.floor(j / i) * y * x) % mod
    }
  }

  return ans
}
