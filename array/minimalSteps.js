/**
 * @param {string[]} maze
 * @return {number}
 */
var minimalSteps = function (maze) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  const n = maze.length
  const m = maze[0].length
  const buttons = []
  const stones = []
  let startx = -1
  let starty = -1
  let targetx = -1
  let targety = -1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 'M') {
        buttons.push([i, j])
      } else if (maze[i][j] === 'O') {
        stones.push([i, j])
      } else if (maze[i][j] === 'S') {
        startx = i
        starty = j
      } else if (maze[i][j] === 'T') {
        targetx = i
        targety = j
      }
    }
  }

  const btnLen = buttons.length
  const stonesLen = stones.length
  const startDist = bfs(startx, starty, maze)
  // 没有机关 直接走到宝藏位置
  if (btnLen === 0) return startDist[targetx][targety]

  const dist = Array(btnLen)
    .fill(0)
    .map(() => Array(btnLen + 2).fill(-1))
  const mid = []
  for (let i = 0; i < btnLen; i++) {
    const dis = bfs(buttons[i][0], buttons[i][1], maze)
    mid.push(dis)
    dist[i][btnLen + 1] = dis[targetx][targety]
  }

  for (let i = 0; i < btnLen; i++) {
    let tmp = -1
    for (let k = 0; k < stonesLen; k++) {
      const [midx, midy] = stones[k]
      if (mid[i][midx][midy] !== -1 && startDist[midx][midy] !== -1) {
        if (tmp === -1 || tmp > startDist[midx][midy] + mid[i][midx][midy]) {
          tmp = startDist[midx][midy] + mid[i][midx][midy]
        }
      }
    }
    dist[i][btnLen] = tmp
    for (let j = i + 1; j < btnLen; j++) {
      let mn = -1
      for (let k = 0; k < stonesLen; k++) {
        const [midx, midy] = stones[k]
        if (mid[i][midx][midy] !== -1 && mid[j][midx][midy] !== -1) {
          if (mn === -1 || mn > mid[i][midx][midy] + mid[j][midx][midy]) {
            mn = mid[i][midx][midy] + mid[j][midx][midy]
          }
        }
      }
      dist[i][j] = mn
      dist[j][i] = mn
    }
  }

  for (let i = 0; i < btnLen; i++) {
    if (dist[i][btnLen] === -1 || dist[i][btnLen + 1] === -1) return -1
  }

  const dp = Array(1 << btnLen)
    .fill(0)
    .map(() => Array(btnLen).fill(-1))
  for (let i = 0; i < btnLen; i++) {
    dp[1 << i][i] = dist[i][btnLen]
  }

  for (let mask = 1; mask < 1 << btnLen; mask++) {
    for (let i = 0; i < btnLen; i++) {
      if ((mask & (1 << i)) !== 0) {
        for (let j = 0; j < btnLen; j++) {
          if ((mask & (1 << j)) === 0) {
            let next = mask | (1 << j)
            if (dp[next][j] === -1 || dp[next][j] > dp[mask][i] + dist[i][j]) {
              dp[next][j] = dp[mask][i] + dist[i][j]
            }
          }
        }
      }
    }
  }

  let ans = -1
  const finalMask = (1 << btnLen) - 1
  for (let i = 0; i < btnLen; i++) {
    if (ans === -1 || ans > dp[finalMask][i] + dist[i][btnLen + 1]) {
      ans = dp[finalMask][i] + dist[i][btnLen + 1]
    }
  }
  return ans

  function bfs(x, y, maze) {
    const res = Array(n)
      .fill(0)
      .map(() => Array(m).fill(-1))
    res[x][y] = 0
    const queue = []
    queue.push([x, y])
    while (queue.length) {
      const [curx, cury] = queue.shift()
      for (const [dx, dy] of dirs) {
        const row = curx + dx
        const col = cury + dy
        if (inBound(row, col) && maze[row][col] !== '#' && res[row][col] === -1) {
          res[row][col] = res[curx][cury] + 1
          queue.push([row, col])
        }
      }
    }
    return res
  }

  function inBound(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m
  }
}
