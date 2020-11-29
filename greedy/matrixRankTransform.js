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

class UF {
  constructor(size) {
    this.parent = Array(size).fill(0)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  union(x, y) {
    this.parent[this.find(x)] = this.find(y)
  }
}
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var matrixRankTransform = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const res = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0))
  const row = Array(m).fill(0)
  const col = Array(n).fill(0)

  const pq = new Heap((a, b) => a[0] - b[0] < 0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      pq.insert([matrix[i][j], i, j])
    }
  }

  while (pq.size()) {
    const target = pq.top()[0]
    const list = []
    while (pq.size() && pq.top()[0] === target) {
      list.push(pq.remove())
    }

    // 行的范围在[0, m-1]，列在[0, n-1]，对列加m，使得范围映射到[m, m + n-1]，与行不相同即可。如果行相同，或者列相同，都可以进行合并。
    const uf = new UF(m + n)
    for (const pair of list) {
      uf.union(pair[1], pair[2] + m)
    }

    const map = new Map()
    for (const pair of list) {
      const key = uf.find(pair[1])
      if (!map.has(key)) {
        map.set(key, [])
      }
      map.get(key).push(pair)
    }

    for (const group of map.values()) {
      let rank = 0
      for (const [, i, j] of group) {
        rank = Math.max(rank, Math.max(row[i], col[j]) + 1)
      }
      for (const [, i, j] of group) {
        res[i][j] = rank
        row[i] = Math.max(row[i], rank)
        col[j] = Math.max(col[j], rank)
      }
    }
  }
  return res
}

matrixRankTransform([
  [1, 2],
  [3, 4]
])
