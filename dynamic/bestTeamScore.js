/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = function (scores, ages) {
  const n = scores.length
  const dp = Array(n).fill(0)
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push([scores[i], ages[i]])
  }
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    return a[1] - b[1]
  })

  for (let i = 0; i < n; i++) {
    dp[i] = arr[i][0]
    for (let j = 0; j < i; j++) {
      if (arr[i][0] >= arr[j][0] || arr[i][1] === arr[j][1]) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i][0])
      }
    }
  }

  return Math.max(...dp)
}

bestTeamScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [811, 364, 124, 873, 790, 656, 581, 446, 885, 134])
