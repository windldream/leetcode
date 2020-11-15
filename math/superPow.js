/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  if (b.length === 0) return 1
  const mod = 1337
  const last = b.pop()
  let part1 = mypow(a, last)
  let part2 = mypow(superPow(a, b), 10)
  return (part1 * part2) % mod

  function mypow(a, k) {
    a %= mod
    let ans = 1
    for (let i = 0; i < k; i++) {
      ans = (ans * a) % mod
    }
    return ans
  }
}
