/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
var breakfastNumber = function (staple, drinks, x) {
  const mod = 10 ** 9 + 7
  staple.sort((a, b) => a - b)
  drinks.sort((a, b) => a - b)
  const n = staple.length
  const m = drinks.length
  let i = 0
  let j = m - 1
  let ans = 0
  while (i < n && j >= 0) {
    if (staple[i] + drinks[j] > x) j--
    else {
      ans += j + 1
      ans %= mod
      i++
    }
  }
  return ans
}
