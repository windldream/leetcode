/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const len = arr.length
  const sum = Array(len + 1).fill(0)
  for (let i = 1; i <= len; i++) {
    sum[i] = sum[i - 1] ^ arr[i - 1]
  }

  const res = []
  for (const [l, r] of queries) {
    res.push(sum[r + 1] ^ sum[l])
  }
  return res
}
