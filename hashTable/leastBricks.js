/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const map = new Map()
  const m = wall.length
  for (let i = 0; i < m; i++) {
    let sum = 0
    for (let j = 0; j < wall[i].length - 1; j++) {
      sum += wall[i][j]
      if (!map.has(sum)) {
        map.set(sum, 0)
      }
      map.set(sum, map.get(sum) + 1)
    }
  }

  let ans = m
  for (const val of map.values()) {
    ans = Math.min(ans, m - val)
  }
  return ans
}

leastBricks([
  [9, 1],
  [6, 3, 1],
  [2, 4, 1, 3]
])
