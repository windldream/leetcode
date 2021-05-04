/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
  a.sort((a, b) => a - b)
  b.sort((a, b) => a - b)
  const m = a.length
  const n = b.length
  let i = 0
  let j = 0
  let ans = Infinity
  while (i < m && j < n) {
    if (a[i] >= b[j]) {
      ans = Math.min(ans, a[i] - b[j])
      j++
    } else {
      ans = Math.min(ans, b[j] - a[i])
      i++
    }
  }
  return ans
}

// 2 3 4
// 3 4 5
