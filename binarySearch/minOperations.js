/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
var minOperations = function (target, arr) {
  const n = target.length
  const m = arr.length
  const map = new Map()
  const list = []

  for (let i = 0; i < n; i++) {
    map.set(target[i], i)
  }

  for (let i = 0; i < m; i++) {
    if (map.has(arr[i])) list.push(map.get(arr[i]))
  }

  // TODO 没完全懂
  const len = list.length
  const f = Array(len + 1).fill(0)
  const g = Array(len + 1).fill(Infinity)
  let max = 0

  for (let i = 0; i < len; i++) {
    const t = list[i]
    let l = 0
    let r = len

    while (l < r) {
      const mid = (l + r + 1) >> 1

      if (g[mid] < t) l = mid
      else r = mid - 1
    }

    const clen = r + 1
    f[i] = clen
    g[clen] = Math.min(g[clen], t)
    max = Math.max(max, f[i])
  }

  return n - max
}
