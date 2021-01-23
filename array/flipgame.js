/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
  let ans = Infinity
  const len = fronts.length
  const same = new Set()
  for (let i = 0; i < len; i++) {
    if (backs[i] === fronts[i]) same.add(backs[i])
  }

  for (let i = 0; i < len; i++) {
    if (!same.has(backs[i])) ans = Math.min(ans, backs[i])
    if (!same.has(fronts[i])) ans = Math.min(ans, fronts[i])
  }

  return ans === Infinity ? 0 : ans
}
