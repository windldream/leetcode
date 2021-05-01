/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const n = wall.length
  const mapCount = new Map()
  let ans = 0
  for (let i = 0; i < n; i++) {
    let sum = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j]
      mapCount.set(sum, (mapCount.get(sum) || 0) + 1)
      if (mapCount.get(sum) > ans && j !== wall[i].length - 1) {
        ans = mapCount.get(sum)
      }
    }
  }

  return n - ans
}

leastBricks([
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1]
])
