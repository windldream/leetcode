/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
  const f = Array(2 * 10 ** 5 + 1).fill(0)
  let max = 0
  let ans = 0
  for (const num of nums) {
    f[num] += 1
    max = Math.max(max, num)
    if (f[num] === 1) ans += 1
  }

  for (let i = 1; i <= max; i++) {
    if (f[i]) continue
    let g = 0
    for (let j = i; j <= max; j += i) {
      if (f[j]) {
        g = gcd(j, g)
        if (g === i) break
      }
    }
    if (g === i) ans += 1
  }
  return ans

  function gcd(x, y) {
    if (y === 0) return x
    return gcd(y, x % y)
  }
}

//
