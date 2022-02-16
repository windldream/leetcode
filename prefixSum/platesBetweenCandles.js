/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length
  const sum = Array(n).fill(0)
  let flag = false
  let count = 0

  for (let i = 0; i < n; i++) {
    if (!flag && s[i] === '|') {
      flag = true
    } else if (flag && s[i] === '|') {
      sum[i] = count
      count = 0
    } else if (flag && s[i] === '*') {
      count++
    }

    if (i > 0) sum[i] += sum[i - 1]
  }

  const right = Array(n).fill(n - 1)

  for (let i = n - 2; i >= 0; i--) {
    if (s[i] === '|') right[i] = i
    else right[i] = right[i + 1]
  }

  const ans = []

  for (const [l, r] of queries) {
    if (right[l] >= r) ans.push(0)
    else ans.push(sum[r] - sum[right[l]])
  }

  return ans
}
