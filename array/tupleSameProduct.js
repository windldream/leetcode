/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const counter = new Map()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const mul = nums[i] * nums[j]
      counter.set(mul, (counter.get(mul) || 0) + 1)
    }
  }

  let ans = 0
  for (const count of counter.values()) {
    if (count < 2) continue
    ans += (8 * count * (count - 1)) / 2
  }
  return ans
}

tupleSameProduct([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192])
