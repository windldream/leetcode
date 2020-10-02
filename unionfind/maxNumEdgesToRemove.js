/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function (n, edges) {
  const parent = Array(n + 1).fill(0)
  let ans = 0
  let count1 = 0,
    count2 = 0,
    count3 = 0,
    count = 0

  init(n)
  // Alice
  for (const [type, u, v] of edges) {
    if (type === 1 || type === 3) {
      union(u, v)
      count1++
    }
  }
  if (count !== 1) return -1

  init(n)
  // Bob
  for (const [type, u, v] of edges) {
    if (type === 2 || type === 3) {
      union(u, v)
      count2++
    }
  }
  if (count !== 1) return -1

  init(n)
  for (const [type, u, v] of edges) {
    if (type === 3) {
      union(u, v)
      count3++
    }
  }

  count1 -= count3
  count2 -= count3
  ans += count3 - (n - count)
  ans += count1 - (count - 1) + count2 - (count - 1)
  return ans

  function init(n) {
    count = n
    for (let i = 1; i <= n; i++) {
      parent[i] = i
    }
  }

  function find(x) {
    let root = x
    while (parent[root] !== root) {
      root = parent[root]
    }
    while (parent[x] !== root) {
      const tmp = root
      parent[x] = root
      x = tmp
    }
    return root
  }

  function union(x, y) {
    x = find(x)
    y = find(y)
    if (x !== y) {
      parent[x] = y
      count--
    }
  }
}
