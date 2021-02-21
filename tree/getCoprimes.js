/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number[]}
 */
var getCoprimes = function (nums, edges) {
  const n = nums.length
  const g = new Map()
  const lasts = Array(55)
    .fill(0)
    .map(() => [])
  for (const [u, v] of edges) {
    if (!g.has(u)) g.set(u, new Set())
    if (!g.has(v)) g.set(v, new Set())
    g.get(u).add(v)
    g.get(v).add(u)
  }
  const ans = Array(n).fill(-1)
  dfs(0, -1, 0, nums, ans)

  return ans

  function dfs(node, pre, level, nums, ans) {
    let re = -1
    let lev = -1
    for (let i = 1; i <= 50; i++) {
      if (lasts[i].length && lasts[i][lasts[i].length - 1][0] > lev && gcd(i, nums[node]) === 1) {
        re = lasts[i][lasts[i].length - 1][1]
        lev = lasts[i][lasts[i].length - 1][0]
      }
    }
    ans[node] = re
    for (const next of g.get(node)) {
      if (next !== pre) {
        lasts[nums[node]].push([level, node])
        dfs(next, node, level + 1, nums, ans)
        lasts[nums[node]].pop()
      }
    }
  }

  function gcd(x, y) {
    if (x === 0) return y
    return gcd(y % x, x)
  }
}

getCoprimes(
  [2, 3, 3, 2],
  [
    [0, 1],
    [1, 2],
    [1, 3]
  ]
)
