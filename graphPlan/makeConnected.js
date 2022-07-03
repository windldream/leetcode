/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  const uf = Array(n)
    .fill(0)
    .map((val, idx) => idx)
  let num = 0

  for (const [u, v] of connections) {
    const x = find(u)
    const y = find(v)

    if (x === y) {
      num++
    } else {
      union(x, y)
    }
  }

  const set = new Set()

  for (let i = 0; i < n; i++) {
    set.add(find(i))
  }

  return num >= set.size - 1 ? set.size - 1 : -1

  function find(x) {
    if (uf[x] === x) return x
    return (uf[x] = find(uf[x]))
  }

  function union(x, y) {
    uf[y] = x
  }
}
