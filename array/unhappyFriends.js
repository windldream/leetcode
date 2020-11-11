/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function (n, preferences, pairs) {
  const map = new Map()
  for (const [u, v] of pairs) {
    map.set(u, v)
    map.set(v, u)
  }

  const ans = new Set()
  for (let x = 0; x < n; x++) {
    const y = map.get(x)
    const index = preferences[x].indexOf(y)
    for (let i = 0; i < index; i++) {
      const u = preferences[x][i]
      const v = map.get(u)
      if (preferences[u].indexOf(x) < preferences[u].indexOf(v)) {
        ans.add(x)
        break
      }
    }
  }
  return ans.size
}
