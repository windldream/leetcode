/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  let sum = 0n
  for (let num of nums) sum += BigInt(num)
  const mod = sum % BigInt(p)
  if (mod === 0n) return 0

  const len = nums.length
  const map = new Map()
  map.set(0n, -1)
  sum = 0n
  let ans = len
  for (let i = 0; i < len; i++) {
    sum += BigInt(nums[i])
    const curmod = sum % BigInt(p)
    map.set(curmod, i)
    const targetmod = curmod >= mod ? curmod - mod : curmod - mod + BigInt(p)
    if (map.has(targetmod)) {
      ans = Math.min(ans, i - map.get(targetmod))
    }
  }
  return ans === len ? -1 : ans
}

minSubarray([8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2], 148)
