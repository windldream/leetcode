class Heap {
  constructor(compare = (a, b) => a - b > 0) {
    this.heap = []
    this.size = 0
    this.compare = compare
  }

  top() {
    return this.heap[0]
  }

  insert(item) {
    this.heap.push(item)
    this.size += 1
    this.up(this.size - 1)
  }

  remove() {
    const delItem = this.heap[0]
    this.swap(this.size - 1, 0)
    this.size -= 1
    this.heap.length -= 1
    this.down(0)
    return delItem
  }

  down(k) {
    let left = k * 2 + 1,
      right = k * 2 + 2,
      largest = k

    if (left < this.size && this.compare(this.heap[left], this.heap[largest])) {
      largest = left
    }

    if (right < this.size && this.compare(this.heap[right], this.heap[largest])) {
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
 * @param {number[][]} edges
 * @param {number} M
 * @param {number} N
 * @return {number}
 */
var reachableNodes = function (edges, M, N) {
  const g = Array(N)
    .fill(0)
    .map(() => [])
  for (const [u, v, w] of edges) {
    g[u].push([v, w])
    g[v].push([u, w])
  }

  const maxHeap = new Heap((a, b) => a[0] - b[0] > 0)
  const HP = new Map()
  maxHeap.insert([M, 0])
  while (maxHeap.size > 0) {
    const hp = maxHeap.top()[0]
    const cur = maxHeap.top()[1]
    maxHeap.remove()
    if (HP.has(cur)) continue
    HP.set(cur, hp)
    for (const [v, w] of g[cur]) {
      const nextHp = hp - w - 1
      if (HP.has(v) || nextHp < 0) continue
      maxHeap.insert([nextHp, v])
    }
  }

  let ans = HP.size
  for (const [u, v, w] of edges) {
    let uv = HP.has(u) ? HP.get(u) : 0
    let vu = HP.has(v) ? HP.get(v) : 0
    ans += Math.min(w, uv + vu)
  }
  return ans
}

reachableNodes(
  [
    [1, 2, 5],
    [0, 3, 3],
    [1, 3, 2],
    [2, 3, 4],
    [0, 4, 1]
  ],
  7,
  5
)
