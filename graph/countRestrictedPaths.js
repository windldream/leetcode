// 默认最小堆
const defaultComparator = function (a, b) {
  return a < b
}

class FastPriorityQueue {
  constructor(comparator) {
    if (!(this instanceof FastPriorityQueue)) return new FastPriorityQueue(comparator)
    this.array = []
    this.size = 0
    this.compare = comparator || defaultComparator
  }

  add(myval) {
    let i = this.size
    this.array[this.size] = myval
    this.size += 1
    let p
    let ap
    while (i > 0) {
      // 父节点
      p = (i - 1) >> 1
      ap = this.array[p]
      // 停止上浮
      if (!this.compare(myval, ap)) break
      this.array[i] = ap
      i = p
    }
    this.array[i] = myval
  }

  heapify(arr) {
    this.array = arr
    this.size = arr.length
    for (let i = this.size >> 1; i >= 0; i--) {
      this._percolateDown(i)
    }
  }

  // 上浮
  _percolateUp(i, force) {
    const myval = this.array[i]
    let p
    let ap
    while (i > 0) {
      // 父节点
      p = (i - 1) >> 1
      ap = this.array[p]
      if (!force && !this.compare(myval, ap)) break
      this.array[i] = ap
      i = p
    }
    this.array[i] = myval
  }

  // 下沉
  _percolateDown(i) {
    const size = this.size
    const hsize = this.size >>> 1
    const ai = this.array[i]
    let l
    let r
    let bestc
    while (i < hsize) {
      // 左子节点
      l = (i << 1) + 1
      // 右子节点
      r = l + 1
      bestc = this.array[l]
      if (r < size) {
        if (this.compare(this.array[r], bestc)) {
          l = r
          bestc = this.array[r]
        }
      }
      if (!this.compare(bestc, ai)) break
      this.array[i] = bestc
      i = l
    }
    this.array[i] = ai
  }

  // 删除索引为index的元素
  _removeAt(index) {
    if (index > this.size - 1 || index < 0) return undefined
    // 让索引为index上浮到堆顶
    this._percolateUp(index, true)
    return this.poll()
  }

  // 删除逻辑等于myval的元素
  remove(myval) {
    for (let i = 0; i < this.size; i++) {
      if (!this.compare(this.array[i], myval) && !this.compare(myval, this.array[i])) {
        this._removeAt(i)
        return true
      }
    }
    return false
  }

  // 获取堆顶元素
  peek() {
    if (this.size === 0) return undefined
    return this.array[0]
  }

  // 删除堆顶元素
  poll() {
    if (this.size === 0) return undefined
    const ans = this.array[0]
    if (this.size > 1) {
      this.array[0] = this.array[--this.size]
      this._percolateDown(0)
    } else {
      this.size -= 1
    }
    return ans
  }

  isEmpty() {
    return this.size === 0
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
  const mod = 10 ** 9 + 7
  const g = new Map()
  for (let [u, v, w] of edges) {
    u--
    v--
    if (!g.has(u)) g.set(u, new Map())
    g.get(u).set(v, w)
    if (!g.has(v)) g.set(v, new Map())
    g.get(v).set(u, w)
  }

  const dis = Array(n).fill(Infinity)
  const fq = new FastPriorityQueue((a, b) => a[0] < b[0])
  dis[n - 1] = 0
  fq.add([0, n - 1])
  while (!fq.isEmpty()) {
    const [d, id] = fq.poll()
    if (!g.has(id)) continue
    for (const [nextId, nextD] of g.get(id)) {
      if (d + nextD < dis[nextId]) {
        dis[nextId] = d + nextD
        fq.add([dis[nextId], nextId])
      }
    }
  }

  const degree = Array(n).fill(0)
  const g2 = new Map()
  const queue1 = []
  queue1.push(0)
  const visited = new Set()
  visited.add(0)
  while (queue1.length) {
    const id = queue1.shift()
    if (!g.has(id)) continue
    for (const nextId of g.get(id).keys()) {
      if (dis[id] > dis[nextId]) {
        if (!g2.has(id)) g2.set(id, new Set())
        g2.get(id).add(nextId)
        degree[nextId] += 1
        if (!visited.has(nextId)) {
          visited.add(nextId)
          queue1.push(nextId)
        }
      }
    }
  }

  const ans = Array(n).fill(0)
  ans[0] = 1
  const queue2 = []
  queue2.push(0)
  while (queue2.length) {
    const id = queue2.shift()
    if (!g2.has(id)) continue
    for (const nextId of g2.get(id)) {
      ans[nextId] = (ans[id] + ans[nextId]) % mod
      degree[nextId] -= 1
      if (degree[nextId] === 0) {
        queue2.push(nextId)
      }
    }
  }

  return ans[n - 1]
}

countRestrictedPaths(5, [
  [1, 2, 3],
  [1, 3, 3],
  [2, 3, 1],
  [1, 4, 2],
  [5, 2, 2],
  [3, 5, 1],
  [5, 4, 10]
])
