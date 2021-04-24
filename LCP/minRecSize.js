/**
 * @param {number[][]} lines
 * @return {number}
 */
var minRecSize = function (lines) {
  const n = lines.length
  if (n <= 1) return 0

  const T = 50
  const inf = 1e9

  let rl = -inf
  let rr = inf
  let t = T
  lines.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  while (t--) {
    const mid = (rl + rr) / 2
    let conflict = false
    for (let i = 0; i < n - 1; i++) {
      const a = lines[i][0] * mid + lines[i][1]
      const b = lines[i + 1][0] * mid + lines[i + 1][1]
      if (a - b > 1e-8) {
        conflict = true
        break
      }
    }
    if (conflict) rl = mid
    else rr = mid
  }

  t = T
  let ll = -inf
  let lr = inf
  lines.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
  while (t--) {
    const mid = (ll + lr) / 2
    let conflict = false
    for (let i = 0; i < n - 1; i++) {
      const a = lines[i][0] * mid + lines[i][1]
      const b = lines[i + 1][0] * mid + lines[i + 1][1]
      if (a - b > 1e-8) {
        conflict = true
        break
      }
    }
    if (conflict) lr = mid
    else ll = mid
  }

  t = T
  let ul = -inf
  let ur = inf
  lines.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]))
  while (t--) {
    const mid = (ul + ur) / 2
    let conflict = false
    for (let i = 0; i < n - 1; i++) {
      const a = (mid - lines[i][1]) / lines[i][0]
      const b = (mid - lines[i + 1][1]) / lines[i + 1][0]
      if (a - b > 1e-8) {
        conflict = true
        break
      }
    }
    if (conflict) ul = mid
    else ur = mid
  }

  t = T
  let dl = -inf
  let dr = inf
  lines.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
  while (t--) {
    const mid = (dl + dr) / 2
    let conflict = false
    for (let i = 0; i < n - 1; i++) {
      const a = (mid - lines[i][1]) / lines[i][0]
      const b = (mid - lines[i + 1][1]) / lines[i + 1][0]
      if (a - b > 1e-8) {
        conflict = true
        break
      }
    }
    if (conflict) dr = mid
    else dl = mid
  }

  if (ll - rr > 1e-8) return 0

  return (rr - ll) * (ur - dl)
}

minRecSize([
  [5, 2],
  [5, -4],
  [2, -5],
  [4, -1],
  [2, 0]
])
