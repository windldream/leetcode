/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
const minimumHammingDistance = function (source, target, allowedSwaps) {
  const n = source.length
  const uf = {}
  for (let i = 0; i < n; i++) {
    uf[i] = i
  }
  for (const [a, b] of allowedSwaps) {
    const u = find(a)
    const v = find(b)
    if (u !== v) {
      union(u, v)
    }
  }

  const s = new Map()
  for (let i = 0; i < n; i++) {
    const u = find(i)
    if (!s.has(u)) s.set(u, new Set())
    s.get(u).add(i)
  }

  let ans = 0
  for (const list of s.values()) {
    const sames = []
    const counterT = {}
    for (const u of list) {
      sames.push(source[u])
      counterT[target[u]] = (counterT[target[u]] || 0) + 1
    }

    for (const val of sames) {
      if (counterT[val] > 0) {
        counterT[val] -= 1
      } else {
        ans++
      }
    }
  }
  return ans

  function union(u, v) {
    uf[u] = v
  }

  function find(x) {
    if (uf[x] !== x) {
      uf[x] = find(uf[x])
    }
    return uf[x]
  }
}

minimumHammingDistance(
  [41, 37, 51, 100, 25, 33, 90, 49, 65, 87, 11, 18, 15, 18],
  [41, 92, 69, 75, 29, 13, 53, 21, 17, 81, 33, 19, 33, 32],
  [
    [0, 11],
    [5, 9],
    [6, 9],
    [5, 7],
    [8, 13],
    [4, 8],
    [12, 7],
    [8, 2],
    [13, 5],
    [0, 7],
    [6, 4],
    [8, 9],
    [4, 12],
    [6, 1],
    [10, 0],
    [10, 2],
    [7, 3],
    [11, 10],
    [5, 2],
    [11, 1],
    [3, 0],
    [8, 5],
    [12, 6],
    [2, 1],
    [11, 2],
    [4, 9],
    [2, 9],
    [10, 6],
    [12, 10],
    [4, 13],
    [13, 2],
    [11, 9],
    [3, 6],
    [0, 4],
    [1, 10],
    [5, 11],
    [12, 1],
    [10, 4],
    [6, 2],
    [10, 7],
    [3, 13],
    [4, 5],
    [13, 10],
    [4, 7],
    [0, 12],
    [9, 10],
    [9, 3],
    [0, 5],
    [1, 9],
    [5, 10],
    [8, 0],
    [12, 11],
    [11, 4],
    [7, 9],
    [7, 2],
    [13, 9],
    [12, 3],
    [8, 6],
    [7, 6],
    [8, 12],
    [4, 3],
    [7, 13],
    [0, 13],
    [2, 0],
    [3, 8],
    [8, 1],
    [13, 6],
    [1, 4],
    [0, 9],
    [2, 3],
    [8, 7],
    [4, 2],
    [9, 12]
  ]
)
