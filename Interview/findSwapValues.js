/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function (array1, array2) {
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  const m = array1.length
  const sum1 = array1.reduce((prev, curr) => prev + curr, 0)
  const sum2 = array2.reduce((prev, curr) => prev + curr, 0)

  if (sum2 > sum1) {
    const ans = findSwapValues(array2, array1)
    if (ans.length) {
      ;[ans[0], ans[1]] = [ans[1], ans[0]]
    }
    return ans
  }

  let diff = sum1 - sum2
  if (diff & 1) return []

  let l = 0
  diff = diff / 2
  while (l < m) {
    const target = array1[l] - diff
    const idx = search(array2, target)
    if (idx !== -1) return [array1[l], array2[idx]]
    l++
  }
  return []

  function search(arr2, target) {
    let lo = 0
    let hi = arr2.length - 1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (arr2[mid] === target) return mid
      if (arr2[mid] > target) hi = mid - 1
      else lo = mid + 1
    }
    return -1
  }
}

findSwapValues([519, 886, 282, 382, 662, 4718, 258, 719, 494, 795], [52, 20, 78, 50, 38, 96, 81, 20])
// sum1 - a1 + b1 = sum2 - b1 + a1
// (sum1 - sum2) / 2 = (a1 - b1)
