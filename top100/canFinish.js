/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const degree = Array(numCourses).fill(0)
  const g = new Map()
  for (const [u, v] of prerequisites) {
    degree[u] += 1
    if (!g.has(v)) g.set(v, new Set())
    g.get(v).add(u)
  }

  let queue = []
  for (let i = 0; i < numCourses; i++) {
    if (degree[i] === 0) queue.push(i)
  }

  let ans = 0
  while (queue.length) {
    const temp = []
    for (let i = 0; i < queue.length; i++) {
      const u = queue[i]
      ans += 1
      if (!g.has(u)) continue
      for (const v of g.get(u)) {
        degree[v] -= 1
        if (degree[v] === 0) temp.push(v)
      }
    }
    queue = temp
  }

  return ans === numCourses
}
