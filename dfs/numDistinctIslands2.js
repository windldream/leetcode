/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function (grid) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1]
  ]
  const n = grid.length
  const m = grid[0].length
  const visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false))
  const shapes = new Set()
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      const shape = []
      expore(r, c, shape)
      if (shape.length) {
        shapes.add(canonical(shape))
      }
    }
  }
  return shapes.size

  function canonical(shape) {
    let ans = ''
    const len = shape.length
    const lift = n + m
    const out = Array(len).fill(0)
    const xs = Array(len).fill(0)
    const ys = Array(len).fill(0)

    // (x,y), (x,−y), (−x,y), (−x,−y), (y,x), (y,−x), (−y,x), (−y,−x)
    for (let c = 0; c < 8; c++) {
      let t = 0
      for (const z of shape) {
        let x = Math.trunc(z / m)
        let y = z % m
        xs[t] = c <= 1 ? x : c <= 3 ? -x : c <= 5 ? y : -y
        ys[t++] = c <= 3 ? (c % 2 === 0 ? y : -y) : c % 2 === 0 ? x : -x
      }

      const mx = Math.min(...xs)
      const my = Math.min(...ys)

      for (let j = 0; j < len; j++) {
        out[j] = (xs[j] - mx) * lift + (ys[j] - my)
      }
      out.sort((a, b) => a - b)
      const candidate = out.join('')
      if (ans.localeCompare(candidate) < 0) ans = candidate
    }
    return ans
  }

  function expore(r, c, shape) {
    if (r >= 0 && r < n && c >= 0 && c < m && grid[r][c] === 1 && !visited[r][c]) {
      shape.push(r * m + c)
      visited[r][c] = true
      for (const [dx, dy] of dirs) {
        expore(r + dx, c + dy, shape)
      }
    }
  }
}
