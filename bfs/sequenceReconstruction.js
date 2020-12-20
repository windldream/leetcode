/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
const sequenceReconstruction = function(org, seqs) {
  const len = org.length
  const deg = Array(len + 1).fill(-1)
  const g = new Map()
  for (const list of seqs) {
    if (list.some(u => u > len || u <= 0)) return false
    const n = list.length
    if (n < 2) continue
    let u = list[0]
    for (let i = 1; i < n; i++) {
      let v = list[i]
      if (!g.has(u)) g.set(u, new Set())
      g.get(u).add(v)
      u = v
    }
  }

  for (const list of seqs) {
    for (const u of list) {
      deg[u] = 0
    }
  }

  for (const list of g.values()) {
    for (const v of list) {
      deg[v] += 1
    }
  }

  const queue = []
  for (let i = 1; i <= len; i++) {
    if (deg[i] === 0) queue.push(i)
  }

  let index = 0
  while (queue.length) {
    const len = queue.length
    if (len > 1) return false
    const u = queue.shift()
    if (u !== org[index]) return false
    index++
    if (!g.has(u)) continue
    for (const v of g.get(u)) {
      deg[v] -= 1
      if (deg[v] === 0) queue.push(v)
    }
  }
  return index === len
};