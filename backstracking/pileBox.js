/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function (box) {
  box.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  const len = box.length
  const dp = Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    dp[i] = box[i][2]
    for (let j = 0; j < i; j++) {
      if (box[j][0] < box[i][0] && box[j][1] < box[i][1] && box[j][2] < box[i][2]) {
        dp[i] = Math.max(dp[i], dp[j] + box[i][2])
      }
    }
  }
  return Math.max.apply(null, dp)
}
