/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const mod = 10 ** 9 + 7
  const m = pizza.length
  const n = pizza[0].length
  const nums = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  if (pizza[0][0] === 'A') nums[0][0] = 1
  for (let i = 1; i < m; i++) nums[i][0] = nums[i - 1][0] + (pizza[i][0] === 'A' ? 1 : 0)
  for (let i = 1; i < n; i++) nums[0][i] = nums[0][i - 1] + (pizza[0][i] === 'A' ? 1 : 0)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      nums[i][j] = nums[i - 1][j] + nums[i][j - 1] - nums[i - 1][j - 1] + (pizza[i][j] === 'A' ? 1 : 0)
    }
  }

  const dp = Array(m)
    .fill(0)
    .map(() =>
      Array(n)
        .fill(0)
        .map(() => Array(k + 1).fill(0))
    )
  dp[0][0][1] = 1
  for (let x = 2; x <= k; x++) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (dp[i][j][x - 1] === 0) continue

        for (let z = i + 1; z < m; z++) {
          if (hasA(nums, i, j, z - 1, n - 1) && hasA(nums, z, j, m - 1, n - 1)) {
            dp[z][j][x] = (dp[z][j][x] + dp[i][j][x - 1]) % mod
          }
        }

        for (let z = j + 1; z < n; z++) {
          if (hasA(nums, i, j, m - 1, z - 1) && hasA(nums, i, z, m - 1, n - 1)) {
            dp[i][z][x] = (dp[i][z][x] + dp[i][j][x - 1]) % mod
          }
        }
      }
    }
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      ans = (ans + dp[i][j][k]) % mod
    }
  }
  return ans

  function hasA(nums, sr, sc, er, ec) {
    let num1 = 0,
      num2 = 0,
      num3 = 0
    if (sr !== 0 && sc !== 0) num1 = nums[sr - 1][sc - 1]
    if (sr !== 0) num2 = nums[sr - 1][ec]
    if (sc !== 0) num3 = nums[er][sc - 1]
    return nums[er][ec] - num2 - num3 + num1 > 0
  }
}

ways(['A..', 'AAA', '...'], 3)
