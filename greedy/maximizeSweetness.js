/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
var maximizeSweetness = function (sweetness, K) {
  let low = -Infinity
  let sum = 0
  for (const num of sweetness) {
    low = Math.min(low, num)
    sum += num
  }

  if (K === 0) return sum
  let high = Math.trunc(sum / (K + 1))
  while (low <= high) {
    const mid = (low + high) >> 1
    if (check(sweetness, K + 1, mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return low - 1

  function check(sweetness, k, bound) {
    let sum = 0
    for (const num of sweetness) {
      sum += num
      if (sum >= bound) {
        k--
        if (k === 0) return true
        sum = 0
      }
    }
    return k <= 0
  }
}

maximizeSweetness([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)
