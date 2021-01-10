/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
const mostSimilar = function(n, roads, names, targetPath) {
  const g = new Map()
  for (const [u, v] of roads) {
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    g.get(u).add(v)

    if (!g.has(v)) {
      g.set(v, new Set())
    }
    g.get(v).add(u)
  }

  let dp = Array(n).fill(0)
  let paths = Array(n).fill(0).map(() => [])
  for (const s of targetPath) {
    const dp2 = Array(n).fill(100)
    const paths2 = Array(n).fill(0).map((val, index) => paths[index].slice())
    for (let i = 0; i < n; i++) {
      if (!g.has(i)) continue
      for (const j of g.get(i)) {
        const t = s === names[j] ? 0 : 1
        if (dp2[j] > dp[i] + t) {
          dp2[j] = dp[i] + t
          paths2[j] = paths[i].slice()
          paths2[j].push(j)
        }
      }
    }
    dp = dp2
    paths = paths2
  }

  let i = 0
  for (let j = 1; j < n; j++) {
    if (dp[j] < dp[i]) {
      i = j
    }
  }
  return paths[i]
};