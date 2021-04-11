/**
 * @param {number[]} tiles
 * @return {number}
 */
var maxGroupNumber = function (tiles) {
  const map = new Map()
  for (const tile of tiles) {
    map.set(tile, (map.get(tile) || 0) + 1)
  }
  let dp = Array(5)
    .fill(0)
    .map(() => Array(5).fill(-1))
  dp[0][0] = 0
  let prevTile = 0
  const keys = [...map.keys()].sort((a, b) => a - b)
  for (const tile of keys) {
    const cnt = map.get(tile)
    if (prevTile != tile - 1) {
      const dp00 = dp[0][0]
      dp = Array(5)
        .fill(0)
        .map(() => Array(5).fill(-1))
      dp[0][0] = dp00
    }
    const newDp = Array(5)
      .fill(0)
      .map(() => Array(5).fill(-1))
    for (let cnt2 = 0; cnt2 < 5; cnt2++) {
      for (let cnt1 = 0; cnt1 < 5; cnt1++) {
        if (dp[cnt2][cnt1] < 0) continue
        for (let shunza = 0; shunza <= Math.min(cnt2, cnt1, cnt); shunza++) {
          const new2 = cnt1 - shunza
          for (let new1 = 0; new1 <= Math.min(4, cnt - shunza); new1++) {
            const newScore = dp[cnt2][cnt1] + shunza + ~~((cnt - shunza - new1) / 3)
            newDp[new2][new1] = Math.max(newDp[new2][new1], newScore)
          }
        }
      }
    }
    dp = newDp
    prevTile = tile
  }

  let ans = 0
  for (let cnt2 = 0; cnt2 < 5; cnt2++) {
    for (let cnt1 = 0; cnt1 < 5; cnt1++) {
      ans = Math.max(ans, dp[cnt2][cnt1])
    }
  }
  return ans
}
