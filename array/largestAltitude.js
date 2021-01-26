/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const n = gain.length
  let max = 0
  let cur = 0
  for (let i = 0; i < n; i++) {
    cur = cur + gain[i]
    max = Math.max(max, cur)
  }
  return max
}
