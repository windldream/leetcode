/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  let lo = 1
  let hi = Math.max.apply(null, arr) + 1
  while (lo < hi) {
    const mid = lo + ((hi - lo) >> 1)
    const total = getTotal(arr, mid)
    if (total < target) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  const sum1 = getTotal(arr, lo - 1)
  const sum2 = getTotal(arr, lo)
  if (Math.abs(target - sum1) <= Math.abs(sum2 - target)) {
    return lo - 1
  }
  return lo

  function getTotal(arr, target) {
    return arr.reduce((pre, cur) => {
      return pre + (cur > target ? target : cur)
    }, 0)
  }
}

findBestValue([2, 3, 5], 11)
