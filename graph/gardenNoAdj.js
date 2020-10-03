/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function (N, paths) {
  const map = new Map()
  for (const [u, v] of paths) {
    if (!map.has(u)) {
      map.set(u, new Set())
    }
    map.get(u).add(v)
    if (!map.has(v)) {
      map.set(v, new Set())
    }
    map.get(v).add(u)
  }

  const ans = Array(N).fill(0)
  for (let i = 1; i <= N; i++) {
    if (ans[i - 1] === 0) {
      const adjacents = map.get(i)
      if (adjacents) {
        outer: for (let j = 1; j <= 4; j++) {
          for (const next of adjacents) {
            if (ans[next - 1] === j) continue outer
          }
          ans[i - 1] = j
          break
        }
      } else {
        ans[i - 1] = 1
      }
    }
  }
  return ans
}

gardenNoAdj(3, [
  [1, 2],
  [2, 3],
  [3, 1]
])
