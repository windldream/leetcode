/**
 * @param {number[]} stones
 * @return {boolean}
 */
// var canCross = function (stones) {
//   const n = stones.length
//   if (stones[1] !== 1) return false
//   const dp = Array(n)
//     .fill(0)
//     .map(() => Array(n + 1).fill(false))
//   dp[0][0] = true
//   for (let i = 1; i < n; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       const k = stones[i] - stones[j]
//       if (k <= j + 1) {
//         dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1]
//         if (i === n - 1 && dp[i][k]) return true
//       }
//     }
//   }
//   return false
// }

var canCross = function (stones) {
  const visited = new Set()
  return dfs(stones, 0, 0)

  function dfs(stones, idx, k) {
    if (visited.has(idx + '&' + k)) return false
    visited.add(idx + '&' + k)
    for (let i = idx + 1; i < stones.length; i++) {
      const dis = stones[i] - stones[idx]
      if (dis >= k - 1 && dis <= k + 1) {
        if (dfs(stones, i, dis)) return true
      } else if (dis > k + 1) {
        break
      }
    }
    return idx === stones.length - 1
  }
}
