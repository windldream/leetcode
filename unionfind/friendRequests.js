/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[][]} requests
 * @return {boolean[]}
 */
var friendRequests = function (n, restrictions, requests) {
  const enemies = Array(n)
    .fill(0)
    .map(() => new Set())
  const friends = Array(n)
    .fill(0)
    .map(() => new Set())

  for (let i = 0; i < n; i++) {
    friends[i].add(i)
  }

  for (const [u, v] of restrictions) {
    enemies[u].add(v)
    enemies[v].add(u)
  }

  const unionFind = Array(n)
    .fill(0)
    .map((val, index) => index)
  const m = requests.length
  const ans = Array(m).fill(true)

  outer: for (let i = 0; i < m; i++) {
    const [u, v] = requests[i]
    let x = find(u, unionFind)
    let y = find(v, unionFind)

    if (x !== y) {
      if (friends[x].size < friends[y].size) [x, y] = [y, x]

      for (const people of friends[y]) {
        if (enemies[x].has(people)) {
          ans[i] = false
          continue outer
        }
      }

      for (const enemy of enemies[y]) enemies[x].add(enemy)
      for (const friend of friends[y]) friends[x].add(friend)
      union(x, y, unionFind)
    }
  }

  return ans

  function union(x, y, unionFind) {
    unionFind[y] = x
  }

  function find(x, unionFind) {
    const y = unionFind[x]
    return x === y ? x : (unionFind[x] = find(y, unionFind))
  }
}
