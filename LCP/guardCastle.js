/**
 * @param {string[]} grid
 * @return {number}
 */
var guardCastle = function (grid) {
  const n = grid[0].length
  let ans = Infinity

  const g1 = grid.map((str) => str.split(''))
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < n; j++) {
      if (g1[i][j] === 'P') {
        g1[i][j] === 'C'
      }
    }
  }
  ans = Math.min(ans, check(g1))

  const g2 = grid.map((str) => str.split(''))
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < n; j++) {
      if (g2[i][j] === 'P') {
        g2[i][j] === 'S'
      }
    }
  }
  ans = Math.min(ans, check(g2))

  return ans === Infinity ? -1 : ans

  function check(grid) {
    const f = Array(10010)
      .fill(0)
      .map(() =>
        Array(4)
          .fill(0)
          .map(() => Array(4).fill(Infinity))
      )
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]
    const map = {
      '.': 0,
      C: 1,
      S: 2,
      '#': 3
    }
    const n = grid[0].length

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < n; j++) {
        for (const [dx, dy] of dirs) {
          const x = dx + i
          const y = dy + j
          if (x >= 0 && x < 2 && y >= 0 && y < n) {
            if (grid[i][j] === 'C' && grid[x][y] === 'S') return Infinity
            if (grid[i][j] === 'S' && grid[x][y] === 'C') return Infinity
          }
        }
      }
    }

    f[0][0][0] = 0
    for (let i = 1; i <= n; i++) {
      const t1 = map[grid[0][i - 1]]
      const t2 = map[grid[1][i - 1]]
      for (let s1 = 0; s1 < 4; s1++) {
        for (let s2 = 0; s2 < 4; s2++) {
          update(i, s1, s2, t1, t2, 0)
          if (grid[0][i - 1] === '.') update(i, s1, s2, 3, t2, 1)
          if (grid[1][i - 1] === '.') update(i, s1, s2, t1, 3, 1)
          if (grid[0][i - 1] === '.' && grid[1][i - 1] === '.') update(i, s1, s2, 3, 3, 2)
        }
      }
    }

    let ans = Infinity
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        ans = Math.min(ans, f[n][i][j])
      }
    }
    return ans

    function update(i, s1, s2, t1, t2, extra) {
      if (s1 === 1 || s1 === 2) {
        if (s1 + t1 === 3) return
        if (t1 === 0) t1 = s1
      }

      if (s2 === 1 || s2 === 2) {
        if (s2 + t2 === 3) return
        if (t2 === 0) t2 = s2
      }

      if ((t1 === 1 || t1 === 2) && t1 + t2 === 3) return

      if ((t1 === 1 || t1 === 2) && t2 === 0) t2 = t1

      if ((t2 === 1 || t2 === 2) && t1 === 0) t1 = t2

      f[i][t1][t2] = Math.min(f[i][t1][t2], f[i - 1][s1][s2] + extra)
    }
  }
}
