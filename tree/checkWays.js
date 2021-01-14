/**
 * @param {number[][]} pairs
 * @return {number}
 */
const checkWays = function (pairs) {
  let ans = 1
  const counts = new Map()
  const g = new Map()
  for (const [u, v] of pairs) {
    counts.set(u, (counts.get(u) || 0) + 1)
    counts.set(v, (counts.get(v) || 0) + 1)
    if (!g.has(u)) g.set(u, new Set())
    g.get(u).add(v)
    if (!g.has(v)) g.set(v, new Set())
    g.get(v).add(u)
  }

  const n = counts.size
  const keys = [...counts.keys()].sort((a, b) => counts.get(b) - counts.get(a))
  for (const [u, v] of pairs) {
    if (counts.get(u) === counts.get(v)) ans = 2
  }

  const parent = new Map()
  if (counts.get(keys[0]) !== n - 1) {
    ans = 0
  } else {
    for (let i = 0; i < keys.length; i++) {
      parent.set(keys[i], keys[0])
    }
    let flag = true
    const visited = new Set()
    visited.add(keys[0])
    for (let i = 1; i < n; i++) {
      for (const v of g.get(keys[i])) {
        if (!visited.has(v)) {
          if (parent.get(v) !== parent.get(keys[i])) {
            ans = 0
            flag = false
            break
          }
          parent.set(v, keys[i])
        }
      }
      if (!flag) break
      visited.add(keys[i])
    }
  }

  return ans
}

checkWays([
  [3, 4],
  [2, 3],
  [4, 5],
  [2, 4],
  [2, 5],
  [1, 5],
  [1, 4]
])
