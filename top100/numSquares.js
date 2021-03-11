/**
 * @param {number} n
 * @return {number}
 */
// var numSquares = function (n) {
//   const dp = []
//   dp[0] = 0
//   for (let i = 1; i <= n; i++) {
//     dp[i] = i
//     for (let j = 1; i - j * j >= 0; j++) {
//       dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
//     }
//   }
//   return dp[n]
// }

var numSquares = function (n) {
  let level = 0
  const visited = new Set()
  const queue = []
  queue.push(n)
  visited.add(n)
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const num = queue.shift()
      if (num === 0) return level
      for (let j = 0; j * j <= num; j++) {
        const val = num - j * j
        if (!visited.has(val)) {
          queue.push(val)
          visited.add(val)
        }
      }
    }
    level++
  }
}
