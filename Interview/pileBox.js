/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function (box) {
  box.sort(([w1, d1, h1], [w2, d2, h2]) => {
    if (w1 === w2) {
      if (d1 === d2) {
        return h1 - h2
      }
      return d1 - d2
    }
    return w1 - w2
  })

  const n = box.length
  const dp = Array(n).fill(0)
  let ans = 0
  for (let i = 0; i < n; i++) {
    dp[i] = box[i][2]
    for (let j = 0; j <= i; j++) {
      if (box[i][0] > box[j][0] && box[i][1] > box[j][1] && box[i][2] > box[j][2]) {
        dp[i] = Math.max(dp[i], dp[j] + box[i][2])
      }
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
}
