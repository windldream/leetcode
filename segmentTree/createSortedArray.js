class BIT {
  constructor(len) {
    this.len = len
    this.tree = Array(len + 1).fill(0)
  }

  update(i, val) {
    while (i <= this.len) {
      this.tree[i] += val
      i += this.lowBit(i)
    }
  }

  getSum(i) {
    let ans = 0
    while (i > 0) {
      ans += this.tree[i]
      i -= this.lowBit(i)
    }
    return ans
  }

  lowBit(x) {
    return x & (-x)
  }
}
/**
 * @param {number[]} instructions
 * @return {number}
 */
const createSortedArray = function(instructions) {
  const mod = 10 ** 9 + 7
  let ans = 0
  const nums = Array.from(new Set(instructions))
  nums.sort((a, b) => a - b)

  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i + 1)
  }

  const bit = new BIT(nums.length)
  for (let i = 0; i < instructions.length; i++) {
    const t = map.get(instructions[i])
    const l = bit.getSum(t - 1)
    const r = bit.getSum(t)
    ans += Math.min(l, i - r)
    ans %= mod
    bit.update(t, 1)
  }
  return ans
};