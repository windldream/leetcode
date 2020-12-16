/**
 * @param {number} nodes
 * @param {number[]} parent
 * @param {number[]} value
 * @return {number}
 */
const deleteTreeNodes = function (nodes, parent, value) {
  const g = new Map()
  const seen = new Set()
  for (let i = 0; i < parent.length; i++) {
    if (parent[i] === -1) continue
    if (!g.has(parent[i])) {
      g.set(parent[i], new Set())
    }
    g.get(parent[i]).add(i)
  }

  postorder(g, 0)

  const deleteNodes = new Set()
  const queue = [...seen]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      deleteNodes.add(node)
      if (!g.has(node)) continue
      for (const next of g.get(node)) {
        if (deleteNodes.has(next)) continue
        queue.push(next)
      }
    }
  }

  return nodes - deleteNodes.size

  function postorder(g, start) {
    if (!g.has(start)) {
      if (value[start] === 0) seen.add(start)
      return value[start]
    }
    let sum = 0
    for (const child of g.get(start)) {
      sum += postorder(g, child)
    }
    sum += value[start]
    if (sum === 0) {
      seen.add(start)
    }
    return sum
  }
}
