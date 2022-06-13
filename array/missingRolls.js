/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const m = rolls.length
  const total = (m + n) * mean - rolls.reduce((sum, cur) => sum + cur, 0)
  const mod = total % n
  let aver = total / n

  if (aver > 6 || aver < 1) return []

  aver = ~~aver
  const ans = Array(n).fill(aver)

  for (let i = 0; i < mod; i++) {
    ans[i] += 1
  }

  return ans
}
