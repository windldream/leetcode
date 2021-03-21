/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function (n, index, maxSum) {
  let l = index
  let r = index
  let rest = maxSum - n
  let ans = 1
  while (l > 0 || r < n - 1) {
    const len = r - l + 1
    if (rest >= len) {
      rest -= len
      ans++
      l = Math.max(0, l - 1)
      r = Math.min(n - 1, r + 1)
    } else {
      break
    }
  }
  ans += ~~(rest / n)
  return ans
}

maxValue(6, 1, 10)

// 2, 3,
// 3 2
// 2 1
