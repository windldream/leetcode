/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const max = Math.max(...nums)
  const f = Array(max + 1).fill(0)
  const list = Array(max + 1).fill(0)

  for (const num of nums) list[num] += 1

  f[1] = list[1]

  for (let i = 2; i <= max; i++) {
    f[i] = Math.max(f[i - 1], f[i - 2] + list[i] * i)
  }

  return f[max]
}
