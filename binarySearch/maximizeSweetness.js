/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  const n = sweetness.length
  const total = sweetness.reduce((t, cur) => t + cur, 0)
  let l = Math.min(...sweetness)
  let r = Math.floor(total / (k + 1))
  let ans = l

  while (l <= r) {
    const mid = (l + r) >> 1

    if (canDivide(sweetness, mid, k)) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans

  function canDivide(sweetness, t, k) {
    let count = 0
    let sweet = 0

    for (const s of sweetness) {
      sweet += s

      if (sweet >= t) {
        count++
        sweet = 0
      }
    }

    return count > k
  }
}
