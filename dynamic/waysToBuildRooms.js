/**
 * @param {number[]} prevRoom
 * @return {number}
 */
// TODO 做不出来
var waysToBuildRooms = function (prevRoom) {
  const mod = 10 ** 9 + 7
  const n = prevRoom.length

  const fac = Array(n).fill(0)
  const inv = Array(n).fill(0)
  fac[0] = inv[0] = 1

  for (let i = 1; i < n; i++) {
    fac[i] = (fac[i - 1] * i) % mod
    inv[i] = quickmul(fac[i], mod - 2)
  }

  const edges = new Map()
  for (let i = 1; i < n; i++) {
    if (!edges.has(prevRoom[i])) {
      edges.set(prevRoom[i], [])
    }
    edges.get(prevRoom[i]).push(i)
  }

  const f = Array(n).fill(0)
  const cnt = Array(n).fill(0)

  function dfs(u) {
    f[u] = 1

    if (edges.get(u)) {
      for (const v of edges.get(u)) {
        dfs(v)
        f[u] = (((f[u] * f[v]) % mod) * inv[cnt[v]]) % mod
        cnt[u] += cnt[v]
      }
    }

    f[u] = (f[u] * fac[cnt[u]]) % mod
    cnt[u]++
  }

  dfs(0)
  return f[0]

  function quickmul(x, y) {
    let res = 1
    let cur = x

    while (y) {
      if (y & 1) {
        res = (res * cur) % mod
      }

      cur = (cur * cur) % mod
      y >>= 1
    }
    return res
  }
}
