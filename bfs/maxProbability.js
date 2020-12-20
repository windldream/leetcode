class Heap {
  constructor(compare = (a, b) => a - b > 0) {
    this.heap = []
    this.compare = compare
  }

  size() {
    return this.heap.length
  }

  top() {
    return this.heap[0]
  }

  insert(item) {
    this.heap.push(item)
    this.up(this.size() - 1)
  }

  remove() {
    const delItem = this.heap[0]
    this.swap(this.size() - 1, 0)
    this.heap.length -= 1
    this.down(0)
    return delItem
  }

  down(k) {
    let left = k * 2 + 1,
      right = k * 2 + 2,
      largest = k

    if (left < this.size() && this.compare(this.heap[left], this.heap[largest])) {
      largest = left
    }

    if (right < this.size() && this.compare(this.heap[right], this.heap[largest])) {
      largest = right
    }

    if (largest !== k) {
      this.swap(k, largest)
      this.down(largest)
    }
  }

  up(k) {
    let parent = Math.floor((k - 1) / 2)
    while (k > 0 && this.compare(this.heap[k], this.heap[parent])) {
      this.swap(k, parent)
      k = parent
      parent = Math.floor((parent - 1) / 2)
    }
  }

  swap(i, j) {
    const tmp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = tmp
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = function(n, edges, succProb, start, end) {
  const g = new Map()
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i]
    if (!g.has(u)) {
      g.set(u, new Set())
    }
    if (!g.has(v)) {
      g.set(v, new Set())
    }
    g.get(u).add([succProb[i], v])
    g.get(v).add([succProb[i], u])
  }

  const visited = Array(n).fill(false)
  const pq = new Heap((a, b) => a[0] - b[0] > 0)
  pq.insert([1, start])
  while (pq.size()) {
    const [curProb, cur] = pq.remove()
    if (visited[cur]) continue
    visited[cur] = true
    if (cur === end) return curProb
    if (!g.has(cur)) continue
    for (const [nextProb, next] of g.get(cur)) {
      if (visited[next]) continue
      pq.insert([curProb * nextProb, next])
    }
  }
  return 0
};