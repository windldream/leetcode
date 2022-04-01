/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function (nums) {
  const mod = 1e9 + 7
  const p = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
  const cnts = Array(30).fill(0)
  const n = nums.length
  const mask = 1 << 10
  const f = Array(mask).fill(0)
  f[0] = 1

  for (const num of nums) cnts[num] += 1

  outer: for (let i = 2; i <= 30; i++) {
    if (cnts[i] === 0) continue

    let cur = 0
    let x = i

    for (let j = 0; j < 10; j++) {
      let t = p[j]
      let c = 0

      while (x % t === 0) {
        cur |= 1 << j
        x = x / t
        c++
      }

      if (c > 1) continue outer
    }

    for (let prev = mask - 1; prev >= 0; prev--) {
      if ((prev & cur) !== 0) continue
      f[prev | cur] = (f[prev | cur] + f[prev] * cnts[i]) % mod
    }
  }

  let ans = 0

  for (let i = 1; i < mask; i++) ans = (ans + f[i]) % mod

  for (let i = 0; i < cnts[1]; i++) ans = (ans * 2) % mod

  return ans
}
