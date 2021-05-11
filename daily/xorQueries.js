/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const n = arr.length
  const presum = Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    presum[i + 1] = presum[i] ^ arr[i]
  }

  const ans = []
  for (const [l, r] of queries) {
    ans.push(presum[r + 1] ^ presum[l])
  }
  return ans
}

xorQueries(
  [1, 3, 4, 8],
  [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3]
  ]
)

// arr[i] ^ arr[i + 1] ^ arr[i + 2] ^ arr[i + 3]
//
