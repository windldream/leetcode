/**
 * @param {number} N
 * @param {number[][]} relations
 * @return {number}
 */
const minimumSemesters = function (N, relations) {
  const g = new Map()
  const dag = Array(N + 1).fill(0)
  for (const [u, v] of relations) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    g.get(u).add(v)
    dag[v] += 1
  }

  const queue = []
  for (let i = 1; i <= N; i++) {
    if (dag[i] === 0) queue.push(i)
  }

  if (queue.length === 0) return -1

  let ans = 0
  const seen = new Set()
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const u = queue.shift()
      seen.add(u)
      if (!g.has(u)) continue
      for (const v of g.get(u)) {
        dag[v] -= 1
        if (dag[v] === 0) {
          queue.push(v)
        }
      }
    }
    ans++
  }
  return seen.size === N ? ans : -1
}

minimumSemesters(3, [
  [1, 2],
  [2, 3],
  [3, 2]
])
