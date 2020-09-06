/**
 * @param {string} S
 * @return {string}
 */
var longestDupSubstring = function (S) {
  const nums = []
  for (const c of S) {
    nums.push(c.charCodeAt() - 'a'.charCodeAt())
  }

  let lo = 1
  let hi = S.length
  const a = BigInt(26)
  const MOD = BigInt(2 ** 32)
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    if (search(mid, a, MOD, nums) !== -1) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }
  let start = search(lo - 1, a, MOD, nums)
  return start !== -1 ? S.substring(start, start + lo - 1) : ''

  function search(L, a, mod, nums) {
    let h = BigInt(0)
    for (let i = 0; i < L; i++) {
      h = (h * a + BigInt(nums[i])) % mod
    }
    const set = new Set()
    set.add(h)

    let aL = BigInt(1)
    for (let i = 1; i <= L; i++) {
      aL = (aL * a) % mod
    }

    for (let i = 1; i <= nums.length - L; i++) {
      h = (h * a - ((BigInt(nums[i - 1]) * aL) % mod) + mod) % mod
      h = (h + BigInt(nums[i + L - 1])) % mod
      if (set.has(h)) return i
      set.add(h)
    }
    return -1
  }
}
